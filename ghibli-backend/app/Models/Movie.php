<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    protected $fillable = ['title', 'image'];

    public function products()
{
    return $this->hasMany(Product::class);
}
}
