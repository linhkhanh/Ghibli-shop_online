<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'title',
        'description',
        'movie_id',
        'price',
        'stock',
        'discount'
    ];

    public function movie()
    {
        return $this->belongsTo(Movie::class);
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function latestImage()
{
    // This tells Laravel to find only ONE record from the product_images table
    return $this->hasOne(ProductImage::class)->latestOfMany();
}
}
