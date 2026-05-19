<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Order;
use App\Models\OrderItem;
class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::with(['movie', 'images']);

        // 1. Search Logic
        if ($request->has('search')) {
            $searchTerm = trim($request->query('search'));
            $words = explode(' ', $searchTerm);
            
            $query->where(function($q) use ($words) {
                foreach ($words as $word) {
                    // This ensures BOTH words must exist, but in any order
                    $q->where('title', 'LIKE', "%{$word}%")
                    ->orWhere('description', 'LIKE', "%{$word}%")
                    ->orWhereHas('movie', function($mq) use ($word) {
                        $mq->where('title', 'LIKE', "%{$word}%");
                    });
                }
            });
        }

        $user = auth('sanctum')->user();
        if ($user && $user->role === 'admin') {
            $products = $query
                        ->latest()
                        ->paginate(24);
        } else {
            $products = $query
                        ->where('stock', '>', 0)
                        ->latest()
                        ->paginate(24);
        }
        
        return response()->json([
                    'success' => true,
                    'count'   => $products->count(),
                    'data'    => $products
                    ], 200);
    }

    public function store(Request $request)
    {
        $user = auth('sanctum')->user();
        if (!$user || $user->role !== 'admin') {
            return response()->json(['message' => 'Forbidden: Admins only'], 403);
        }

        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'movie_id'    => 'required|exists:movies,id',
            'price'       => 'required|numeric|min:0',
            'stock'       => 'required|integer|min:0',
            'discount'    => 'nullable|numeric|min:0',
            'images'      => 'required|array|min:1', // Ensure at least one image is sent
            'images.*'    => 'string',               // Each image path must be a string
        ]);

        try {
            return DB::transaction(function () use ($validated, $user) {
                $product = Product::create([
                    'title'       => $validated['title'],
                    'description' => $validated['description'],
                    'movie_id'    => $validated['movie_id'],
                    'price'       => $validated['price'],
                    'stock'       => $validated['stock'],
                    'discount'    => $validated['discount'] ?? 0,
                ]);

                // 3. Save all images into the product_images table
                foreach ($validated['images'] as $imagePath) {
                    ProductImage::create([
                        'product_id' => $product->id,
                        'image'      => $imagePath
                    ]);
                }

                // 4. Return the product loaded with its images
                return response()->json([
                    'message' => 'Product and images created successfully',
                    'data' => $product->load('images')
                ], 201);
            });

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to create product',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function show($id)
    {
        // 1. Find the product by ID
        // 2. Eager load 'images' (all images, not just the latest)
        $product = Product::with(['images'])->find($id);

        // 3. Handle cases where the product ID doesn't exist
        if (!$product) {
            return response()->json([   
                'success' => false,
                'message' => 'Product not found'
            ], 404);
        }

        // 4. Check if stock is 0 for non-admins
        if ($product->stock <= 0) {
            $user = auth('sanctum')->user();
            if (!$user || $user->role !== 'admin') {
                return response()->json([
                    'success' => false,
                    'message' => 'This product is currently out of stock.'
                ], 403);
            }
        }

        return response()->json([
            'success' => true,
            'data'    => $product
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $user = auth('sanctum')->user();
        if (!$user || $user->role !== 'admin') {
            return response()->json(['message' => 'Forbidden: Admins only'], 403);
        }
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        // 1. Validation
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'movie_id'    => 'required|exists:movies,id',
            'price'       => 'required|numeric|min:0',
            'stock'       => 'required|integer|min:0',
            'discount'    => 'nullable|numeric|min:0',
            'images'      => 'nullable|array',
            'images.*'    => 'string',
        ]);

        try {
            return DB::transaction(function () use ($validated, $product, $user) {
                // Set the current user ID for logging purposes
                DB::statement("SET @current_user_id = ?", [$user->id]);
                // 2. Update Product basic info
                $product->update([
                    'title'       => $validated['title'],
                    'description' => $validated['description'],
                    'movie_id'    => $validated['movie_id'],
                    'price'       => $validated['price'],
                    'stock'       => $validated['stock'],
                    'discount'    => $validated['discount'] ?? 0,
                ]);

                // 3. Handle Images (If provided in the request)
                if (isset($validated['images'])) {
                    $product->images()->delete(); 

                    foreach ($validated['images'] as $path) {
                        ProductImage::create([
                            'product_id' => $product->id,
                            'image'      => $path
                        ]);
                    }
                }

                return response()->json([
                    'message' => 'Product updated successfully',
                    'data'    => $product->load('images', 'movie')
                ], 200);
            });

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Update failed',
                'error'   => $e->getMessage()
            ], 500);
        }
    }

    public function destroy($id)
    {
        $user = auth('sanctum')->user();
        if (!$user || $user->role !== 'admin') {
            return response()->json(['message' => 'Forbidden: Admins only'], 403);
        }

        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'success' => false,
                'message' => 'Product not found'
            ], 404);
        }

        try {
            return DB::transaction(function () use ($product, $user, $id) {
                DB::statement("SET @current_user_id = ?", [$user->id]);
                $pendingOrders = Order::where('status', 'pending')
                    ->whereHas('items', function ($query) use ($id) {
                        $query->where('product_id', $id);
                    })->get();

                foreach ($pendingOrders as $order) {
                    // Remove the specific product line item from this order
                    OrderItem::where('order_id', $order->id)
                        ->where('product_id', $id)
                        ->delete();

                    // 4. Recalculate the order totals
                    // Refresh the items relationship to exclude the deleted item
                    $remainingItems = $order->items()->get();

                    if ($remainingItems->isEmpty()) {
                        // If no items are left in the order, cancel or delete the order entirely
                        $order->delete(); 
                    } else {
                        // Calculate new total from remaining items
                        $newSubtotal = $remainingItems->sum(function ($item) {
                            return $item->quantity * $item->price;
                        });

                        // Update the order with the new total amount
                        $order->update([
                            'total_amount' => $newSubtotal,
                            'delivery_fee' => $newSubtotal < 50 ? 20 : 0 // Assuming delivery fee is waived for recalculated orders
                        ]);
                    }
                }
                // 1. Soft delete all associated images
                $product->images()->delete();
                // 2. Soft delete the product itself
                $product->delete();

                return response()->json([
                    'success' => true,
                    'message' => 'Product and all associated images deleted successfully'
                ], 200);
            });
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete product',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function getByMovie(Request $request, $movie_id)
    {
        $perPage = $request->query('limit', 12);
        $products = Product::with(['movie', 'images'])
            ->where('movie_id', $movie_id)
            ->where('stock', '>', 0)
            ->when($request->query('limit'), function ($query, $limit) {
                return $query->limit($limit);
                })
            ->latest()
            ->paginate($perPage);

        if ($products->isEmpty()) {
            return response()->json([
                'message' => 'No products found for this movie.'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'count'   => $products->count(),
            'data' => $products,
        ]);
    }

    public function lowStock()
    {
        $user = auth('sanctum')->user();
        if (!$user || $user->role !== 'admin') {
            return response()->json(['message' => 'Forbidden: Admins only'], 403);
        }

        $products = Product::with(['movie', 'images'])
            ->where('stock', '<=', 10)
            ->latest()
            ->paginate(24);

        return response()->json([
            'success' => true,
            'count'   => $products->count(),
            'data' => $products,
        ]);
    }
}
