<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'DejaVu Sans', sans-serif; color: #333; margin: 0; padding: 20px; }
        .header { border-bottom: 2px solid #2d5a27; padding-bottom: 10px; margin-bottom: 20px; }
        .shop-name { font-size: 24pt; color: #2d5a27; font-weight: bold; }
        .invoice-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        .invoice-table th { background: #f2eee9; padding: 10px; text-align: left; border-bottom: 2px solid #dcd6ce; }
        .invoice-table td { padding: 10px; border-bottom: 1px solid #eee; }
        .total-section { margin-top: 30px; text-align: right; }
        .paid-stamp { color: #2d5a27; border: 3px solid #2d5a27; display: inline-block; padding: 5px 15px; font-weight: bold; transform: rotate(-10deg); }
    </style>
</head>
<body>
    <div class="header">
        <span class="shop-name">MYGHIBLI SHOP</span>
        <div style="float: right; text-align: right;">
            <strong>Invoice #{{ $order->id }}</strong><br>
            Date: {{ $order->created_at->format('M d, Y') }}
        </div>
    </div>

    <div style="margin-bottom: 30px;">
        <strong>Billed To:</strong><br>
        {{ $order->user->name }}<br>
        {{ $order->user->email }}
    </div>

    <table class="invoice-table">
        <thead>
            <tr>
                <th>Description</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            @foreach($order->items as $item)
            <tr>
                <td>{{ $item->product->title }}</td>
                <td>{{ $item->quantity }}</td>
                <td>${{ number_format($item->price, 2) }}</td>
                <td>${{ number_format($item->quantity * $item->price, 2) }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <div class="total-section">
        <p>Subtotal: ${{ number_format($order->total_amount - $order->delivery_fee, 2) }}</p>
        <p>Delivery Fee: ${{ number_format($order->delivery_fee, 2) }}</p>
        <hr>
        <h3>Grand Total: ${{ number_format($order->total_amount, 2) }}</h3>
        
        @if($order->payment_status === 'paid')
            <div class="paid-stamp">PAID</div>
        @endif
    </div>
</body>
</html>
