<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Order;
use Illuminate\Support\Facades\DB;
use App\Models\Product;
use Illuminate\Http\Request;

class AnalyticsController extends Controller
{
    public function getCustomerCount()
    {
        // 1. Count all users where role is 'user'
        $totalCustomers = User::where('role', 'user')->count();

        // 2. Count active vs inactive customers 
        // (Users who have placed at least one order)
        $activeCustomers = User::where('role', 'user')
            ->whereHas('orders') 
            ->count();

        return response()->json([
            'status' => 'success',
            'data' => [
                'total_customers' => $totalCustomers,
                'active_customers' => $activeCustomers,
                'retention_rate' => $totalCustomers > 0 
                    ? round(($activeCustomers / $totalCustomers) * 100, 2) 
                    : 0
            ]
        ]);
    }

    public function getTotalRevenue()
    {
        // 1. Confirmed Revenue (Only Paid orders)
        $confirmedRevenue = Order::where('payment_status', 'paid')
            ->sum('total_amount');
        
        // 2. Pending Revenue (Orders placed but not yet paid)
        $pendingRevenue = Order::where('payment_status', 'unpaid')
            ->sum('total_amount');

        // 3. Optional: Break down by Subtotal vs Shipping
        $revenueDetails = Order::where('payment_status', 'paid')
            ->select(
                DB::raw('SUM(total_amount) as items_subtotal'),
                DB::raw('SUM(delivery_fee) as shipping_total')
            )
            ->first();

        return response()->json([
            'status' => 'success',
            'data' => [
                'total_confirmed_revenue' => (float) $confirmedRevenue,
                'total_pending_revenue' => (float) $pendingRevenue,
                'breakdown' => [
                    'products' => (float) $revenueDetails->items_subtotal,
                    'shipping' => (float) $revenueDetails->shipping_total,
                ],
                'currency' => 'SGD' // Based on your Singapore location
            ]
        ]);
    }

    public function getLowStockCount(Request $request)
    {
        $count = Product::where('stock', '<', 10)->count();

        return response()->json([
            'status' => 'success',
            'data' => [
                'low_stock_count' => $count,
                'threshold_used' => 10
            ]
        ]);
    }

    public function getTopSellers()
    {
        $topProducts = DB::table('order_items')
            ->join('products', 'order_items.product_id', '=', 'products.id')
            ->join('orders', 'order_items.order_id', '=', 'orders.id')
            ->where('orders.payment_status', 'paid')
            ->select(
                'products.id',
                'products.name',
                'products.price',
                DB::raw('SUM(order_items.quantity) as total_sold'),
                DB::raw('SUM(order_items.quantity * order_items.price) as total_revenue')
            )
            ->groupBy('products.id', 'products.name', 'products.price')
            ->orderBy('total_sold', 'desc')
            ->limit(5)
            ->get();

        return response()->json([
            'status' => 'success',
            'data' => $topProducts
        ]);
    }
}
