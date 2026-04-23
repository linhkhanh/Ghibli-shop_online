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
    public function index()
    {
        // 1. Get the logged-in user
        $user = auth('sanctum')->user();

        if (!$user) {
            return response()->json(['message' => 'Please login to view order history'], 401);
        }

        // 2. Fetch all orders with basic info, sorted by newest first
        $orders = Order::where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($orders);
    }

    public function show($id)
    {
        // Fetch a specific order with its items and the related products
        // We use .product to get the Ghibli item name and image
        $order = Order::with('items.product.images')->findOrFail($id);

        // Security Check: Only allow the owner (or the guest who just placed it) to see it
        if (auth('sanctum')->check() && $order->user_id !== auth('sanctum')->id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        return response()->json($order);
    }

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
