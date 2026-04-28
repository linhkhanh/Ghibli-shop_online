<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WishlistController extends Controller
    {
        public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
        ]);
        $user = $request->user();
    
        $user->wishlist()->syncWithoutDetaching([$request->product_id]);

        return response()->json(['message' => 'Added to wishlist!']);
    }

    public function index(Request $request)
    {
        $wishlist = $request->user()->wishlist()->get();
        return response()->json($wishlist);
    }

    public function destroy(Request $request, $productId)
    {
        $user = $request->user();
        
        // detach removes the link between the user and the product
        $user->wishlist()->detach($productId);

        return response()->json(['message' => 'Product removed from wishlist']);
    }
}
