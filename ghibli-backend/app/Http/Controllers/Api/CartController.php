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

        return response()->json([
            'cart_id' => $cart->id,
            'items' => $cart->items,
            'total_price' => $cart->items->sum(function($item) {
                return $item->quantity * $item->product->price;
            })
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
}
