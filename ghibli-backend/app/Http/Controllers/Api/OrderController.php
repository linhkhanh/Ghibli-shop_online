<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\Order;
use Illuminate\Support\Facades\DB;
use Barryvdh\DomPDF\Facade\Pdf;

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
        $order = Order::with(['items.product.images' => function ($query) {
            $query->withTrashed();
        }])->findOrFail($id);

        $user = auth('sanctum')->user();
        $isAdmin = $user && $user->role === 'admin';
        if (!$isAdmin && $order->user_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        return response()->json($order);
    }

    public function store(Request $request)
    {
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
            DB::statement("SET @order_id = 0");
            DB::statement("CALL sp_PlaceOrder(?, ?, ?, ?, ?, ?, @order_id)", [
                $user ? $user->id : null, // p_user_id
                $request->name,             // p_name
                $request->email,            // p_email
                $request->phone_number,     // p_phone
                $request->shipping_address, // p_address
                $cart->id          // p_cart_id
            ]);

            $result = DB::select("SELECT @order_id as id");
            $newOrderId = $result[0]->id;
            return response()->json([
                'message' => 'Order created successfully!',
                'order_id' => $newOrderId
            ], 201);
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
        $user = $request->user();
        if ($user->role !== 'admin') {
            return response()->json(['message' => 'Only Admins can update order status'], 403);
        }
        try {
            return DB::transaction(function () use ($request, $id, $user) {
                    // Set the current user ID for logging purposes 
                DB::statement("SET @current_user_id = ?", [$user->id]);
                // 2. Validate the input
                $request->validate([
                    'status' => 'required|string|in:pending,processing,shipped,delivered'
                ]);

                // 3. Find the order or fail
                $order = Order::findOrFail($id);

                // 4. Update the status
                $order->status = $request->status;
                if ($request->status === 'delivered') {
                    $order->payment_status = 'paid';
                }
                $order->save();

                return response()->json([
                    'message' => "Order #{$id} status updated to {$request->status}!",
                    'order' => $order
                ]);
            });
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 422);
        }
    }

    public function downloadInvoice($id)
{
    $order = Order::with(['user', 'items.product'])->findOrFail($id);
    $pdf = Pdf::loadView('pdf.invoice', compact('order'));
    $pdf->setPaper('a4', 'portrait');
    return $pdf->download("MyGhibli_Invoice_Order_{$order->id}.pdf");
}
}
