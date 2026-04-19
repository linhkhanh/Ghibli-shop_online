<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;
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
}
