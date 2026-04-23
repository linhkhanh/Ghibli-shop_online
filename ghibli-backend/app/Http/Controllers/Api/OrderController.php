<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\Order;
use Illuminate\Support\Facades\DB;
use App\Models\OrderItem;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $userId = auth('sanctum')->id();
        $guestId = $request->header('X-Guest-Cart-ID');

        // 1. Find the correct cart
        $cart = Cart::where(function ($query) use ($userId, $guestId) {
                $userId ? $query->where('user_id', $userId) : $query->where('session_id', $guestId);
            })
            ->with('items.product')
            ->first();

        if (!$cart || $cart->items->isEmpty()) {
            return response()->json(['message' => 'Cart is empty'], 400);
        }

        try {
            return DB::transaction(function () use ($request, $userId, $cart) {
                // 2. Create the Order (Mapping guest info if not logged in)
                $order = Order::create([
                    'user_id' => $userId, // Will be null for guests
                    'name' => $request->name,
                    'email' => $request->email, 
                    'total_amount' => $cart->items->sum(fn($i) => $i->quantity * $i->product->price * (1 - $i->product->discount / 100)),
                    'shipping_address' => $request->shipping_address,
                    'phone_number' => $request->phone_number,
                    'status' => 'pending',
                    'payment_method' => $request->payment_method ?? 'cash',
                ]);

            // 2. Create Order Items & Reduce Product Stock
                foreach ($cart->items as $cartItem) {
                    $product = $cartItem->product;
                    if ($product->stock < $cartItem->quantity) {
                        // We throw an exception to "Rollback" the whole transaction
                        throw new \Exception("Sorry, {$product->name} just sold out!");
                    }

                    OrderItem::create([
                        'order_id' => $order->id,
                        'product_id' => $cartItem->product_id,
                        'quantity' => $cartItem->quantity,
                        'price' => $product->price * (1 - $product->discount / 100), // Save the current price with discount
                    ]);

                    // Reduce stock
                    $product->decrement('stock', $cartItem->quantity);
                }

                $cart->delete(); 
                return response()->json([
                    'message' => 'Order placed successfully',
                    'order_id' => $order->id
                ], 201);
            });
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 422);
        }
    }
}
