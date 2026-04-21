<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\CartItem;

class CartController extends Controller
{
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
