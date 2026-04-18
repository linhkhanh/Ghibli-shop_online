<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    public function index()
    {
        // We load only the single latest image instead of the whole collection
        $products = Product::with(['images'])
        ->where('stock', '>', 0)
        ->latest()
        ->paginate(12);

        return response()->json([
            'success' => true,
            'count'   => $products->count(),
            'data'    => $products
        ], 200);
    }

    public function store(Request $request)
    {
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
            return DB::transaction(function () use ($validated) {
                
                // 2. Create the Product (Only columns that actually exist in your table)
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

        // 4. (Optional) Check if stock is 0 for non-admins
        if ($product->stock <= 0 && (!Auth::check() || Auth::user()->role !== 'admin')) {
            return response()->json([
                'success' => false,
                'message' => 'This product is currently out of stock.'
            ], 403);
        }

        return response()->json([
            'success' => true,
            'data'    => $product
        ], 200);
    }

    public function update(Request $request, $id)
    {
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
            return DB::transaction(function () use ($validated, $product) {

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
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'success' => false,
                'message' => 'Product not found'
            ], 404);
        }

        try {
            $product->delete();

            return response()->json([
                'success' => true,
                'message' => 'Product and all associated images deleted successfully'
            ], 200);
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
        $products = Product::with(['movie', 'images'])
            ->where('movie_id', $movie_id)
            ->where('stock', '>', 0)
            ->when($request->query('limit'), function ($query, $limit) {
                return $query->limit($limit);
                })
            ->get();

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
}
