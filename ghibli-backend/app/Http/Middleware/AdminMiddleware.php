<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Use the Facade instead of the helper
        if (Auth::check() && Auth::user()->role === 'admin') {
            return $next($request);
        }
        // If not admin, return 403 Forbidden
        return response()->json([
            'message' => 'Access denied. Admins only.'
        ], 403);
    }
}
