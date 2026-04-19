<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function index()
    {
        // Fetch all movies from the database
        $movies = Movie::all();

        // Return as JSON with a 200 OK status
        return response()->json([
            'success' => true,
            'data' => $movies
        ], 200);
    }
}

// $movies = Movie::withCount('products')->get();