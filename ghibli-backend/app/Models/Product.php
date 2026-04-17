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
}
