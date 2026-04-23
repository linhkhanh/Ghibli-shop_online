<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\MovieController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\OrderController;

// Public routes
// Authentication
Route::post('/register', [AuthController::class, 'register']);
// Limits to 5 attempts per minute to prevent brute-force attacks
Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:5,1'); 

// Data fetching
Route::get('/movies', [MovieController::class, 'index']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::get('/movies/{movie_id}/products', [ProductController::class, 'getByMovie']);

// Cart & Orders
Route::post('/cart/add', [CartController::class, 'addItem']);
Route::get('/cart', [CartController::class, 'index']);
// Update quantity
Route::patch('/cart/items/{itemId}', [CartController::class, 'update']);
// Remove item
Route::delete('/cart/items/{itemId}', [CartController::class, 'destroy']);
Route::post('/orders', [OrderController::class, 'store']);


// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/orders', [OrderController::class, 'index']);
    Route::get('/orders/{id}', [OrderController::class, 'show']);
});

// Admin routes
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/products', [ProductController::class, 'store']);
    Route::put('/products/{id}', [ProductController::class, 'update']);
    Route::delete('/products/{id}', [ProductController::class, 'destroy']);
    Route::get('/admin/orders', [OrderController::class, 'adminIndex']);
});

