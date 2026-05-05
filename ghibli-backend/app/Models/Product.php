<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

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

    use SoftDeletes;
    protected $dates = ['deleted_at'];

    public function movie()
    {
        return $this->belongsTo(Movie::class);
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function wishedBy()
    {
        return $this->belongsToMany(User::class, 'wishlists');
    }
}
