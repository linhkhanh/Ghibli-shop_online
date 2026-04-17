<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\MovieController;
use App\Http\Controllers\Api\ProductController;

// Public routes
Route::post('/register', [AuthController::class, 'register']);
// Limits to 5 attempts per minute to prevent brute-force attacks
Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:5,1'); 
Route::get('/movies', [MovieController::class, 'index']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/products', [ProductController::class, 'store']);
});

