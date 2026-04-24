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

        $user = auth('sanctum')->user();
        $isAdmin = $user && $user->role === 'admin';
        if (!$isAdmin && $order->user_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        return response()->json($order);
    }

    public function store(Request $request)
    {
        /** @var \App\Models\User $user */
        $user = auth('sanctum')->user();
        $userId = $user ? $user->id : null;
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
            return DB::transaction(function () use ($request, $user, $cart) {
                if ($user) {
                    $user->update([
                        'phone' => $request->phone_number,
                        'address' => $request->shipping_address,
                    ]);
                }
                // 2. Create the Order (Mapping guest info if not logged in)
                $order = Order::create([
                    'user_id' => $user ? $user->id : null, // Will be null for guests
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

    public function adminIndex(Request $request)
    {
        // 1. Security Check: Ensure the person asking is an admin
        if ($request->user()->role != 'admin') {
            return response()->json(['message' => 'Forbidden: Admins only'], 403);
        }

        // 2. Retrieve all orders with user and item details
        // We sort by 'id' descending to see the newest orders at the top
        $orders = Order::with([])
            ->orderBy('id', 'desc')
            ->get();

        return response()->json($orders);
    }

    public function updateStatus(Request $request, $id)
    {
        // 1. Security check: Only Admins can change status
        if ($request->user()->role !== 'admin') {
            return response()->json(['message' => 'Only Admins can update order status'], 403);
        }

        // 2. Validate the input
        $request->validate([
            'status' => 'required|string|in:pending,processing,shipped,delivered'
        ]);

        // 3. Find the order or fail
        $order = Order::findOrFail($id);

        // 4. Update the status
        $order->status = $request->status;
        $order->save();

        return response()->json([
            'message' => "Order #{$id} status updated to {$request->status}!",
            'order' => $order
        ]);
    }
}
