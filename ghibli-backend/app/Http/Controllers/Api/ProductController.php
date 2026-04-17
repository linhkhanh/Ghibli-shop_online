<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index()
    {
        // We load only the single latest image instead of the whole collection
        $products = Product::with(['latestImage'])->get();

        return response()->json([
            'success' => true,
            'data'    => $products
        ]);
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

}
