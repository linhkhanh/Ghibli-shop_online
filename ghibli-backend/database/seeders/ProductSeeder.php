<?php

namespace Database\Seeders;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Use the factory to create 10 products
        Product::factory()
            ->count(10)
            ->create()
            ->each(function ($product) {
                // 2. For each product, create 1 or 2 fake images
                ProductImage::create([
                    'product_id' => $product->id,
                    'image'      => 'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776434608/yt3lf86bjrakqpu00vv2.webp'
                ]);
            });
    }
}
