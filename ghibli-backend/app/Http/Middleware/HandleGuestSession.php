<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;

class HandleGuestSession
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // 1. If the user is logged in, we don't need a guest session
        if ($request->user('sanctum')) {
            return $next($request);
        }

        // 2. Check if the frontend already sent a guest ID
        $guestId = $request->header('X-Guest-Cart-ID');

        // 3. If no ID exists, generate a new one
        if (!$guestId) {
            $guestId = (string) Str::uuid();
            $request->headers->set('X-Guest-Cart-ID', $guestId);
        }

        $response = $next($request);

        // 4. Attach the ID to the response header so React can save it
        $response->headers->set('X-Guest-Cart-ID', $guestId);
        $response->headers->set('Access-Control-Expose-Headers', 'X-Guest-Cart-ID');
        return $response;
    }
}
