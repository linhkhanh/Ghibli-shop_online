<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    
    // Your other protected routes (like /user) go here
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

Route::post('/register', [AuthController::class, 'register']);
