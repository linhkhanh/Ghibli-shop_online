<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\CartItem;

class CartController extends Controller
{
    public function index(Request $request)
    {
        $userId = auth('sanctum')->id();
        $guestId = $request->header('X-Guest-Cart-ID');

        // Find the cart belonging to either the user or the guest session
        $cart = Cart::where(function ($query) use ($userId, $guestId) {
            if ($userId) {
                $query->where('user_id', $userId);
            } else {
                $query->where('session_id', $guestId);
            }
        })
        ->with('items.product.images')
        ->first();

        if (!$cart) {
            return response()->json([
                'items' => [],
                'total_price' => 0
            ]);
        }

        $removedItems = [];

        foreach ($cart->items as $item) {
            // Check if the product still exists or if stock has run out
            if (!$item->product || $item->quantity > $item->product->stock) {
                $removedItems[] = $item->product->title ?? 'An unavailable item';
                $item->delete(); // Remove from database
            }
        }
        $cart->load('items.product.images'); // Reload cart items after potential deletions

        $message = !empty($removedItems) 
        ? "Some of the items were removed as they are out of stock: " . implode(', ', $removedItems)
        : null;

        return response()->json([
            'cart_id' => $cart->id,
            'items' => $cart->items,
            'total_price' => $cart->items->sum(function($item) {
                return $item->quantity * $item->product->price * (1 - $item->product->discount / 100);
            }),
            'message' => $message
        ]);
    }

    public function addItem(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $guestId = $request->header('X-Guest-Cart-ID');
        $userId = auth('sanctum')->id();

        // Find cart by User ID or Guest UUID
        $cart = Cart::firstOrCreate([
            'user_id' => $userId,
            'session_id' => $userId ? null : $guestId,
        ]);

        // / 2. Check if the product is already in the cart
        $cartItem = $cart->items()->where('product_id', $request->product_id)->first();

        if ($cartItem) {
            // Update quantity if it exists
            $cartItem->increment('quantity', $request->quantity);
        } else {
            // Create new item if it doesn't
            $cart->items()->create([
                'product_id' => $request->product_id,
                'quantity' => $request->quantity,
            ]);
        }

        return response()->json([
            'message' => 'Item added to cart successfully',
            'cart' => $cart->load('items.product')
        ], 200);
    }

    public function update(Request $request, $itemId)
    {
        $request->validate([
            'quantity' => 'required|integer|min:1'
        ]);

        // 1. Find the item and its product (to check stock)
        $cartItem = CartItem::with('product')->findOrFail($itemId);
        
        // 2. Validate Ownership (User or Guest)
        $this->authorizeCartItem($cartItem);

        // 3. Stock Check
        if ($request->quantity > $cartItem->product->stock) {
            return response()->json([
                'message' => "Sorry, only {$cartItem->product->stock} units left in stock."
            ], 422);
        }

        $cartItem->update(['quantity' => $request->quantity]);

        return response()->json(['message' => 'Quantity updated', 'item' => $cartItem]);
    }

    public function destroy($itemId)
    {
        $cartItem = CartItem::findOrFail($itemId);
        
        // Validate Ownership
        $this->authorizeCartItem($cartItem);

        $cartItem->delete();

        return response()->json(['message' => 'Item removed from cart']);
    }

/**
 * Helper to ensure the person trying to edit the cart actually owns it
 */
    private function authorizeCartItem($cartItem)
    {
        $userId = auth('sanctum')->id();
        $guestId = request()->header('X-Guest-Cart-ID');
        $cart = $cartItem->cart;

        $isOwner = ($userId && $cart->user_id === $userId) || 
                (!$userId && $cart->session_id === $guestId);

        if (!$isOwner) {
            abort(403, 'Unauthorized action.');
        }
    }
}
