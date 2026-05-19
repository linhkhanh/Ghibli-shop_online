<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // 1. Validation
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email:rfc,dns|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'address' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:20|min:6',
        ], [
            'email.email' => 'The email format is invalid.',
            'email.unique' => 'The email has already been taken.',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // 2. Create User
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password), // Always hash the password!
            'address' => $request->address,
            'phone' => $request->phone,
            'role' => 'user', // Default role
        ]);

        // 3. Create Token (Sanctum)
        $token = $user->createToken('auth_token')->plainTextToken;

        // Trigger the merge
        $guestId = $request->header('X-Guest-Cart-ID');
        if ($guestId) {
            Cart::mergeGuestCart($user->id, $guestId);
        }

        // 4. Return Response to React
        return response()->json([
            'message' => 'User registered successfully!',
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
        ], 201);
    }

    public function logout(Request $request)
    {
        // Revoke the token that was used to authenticate the current request
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Successfully logged out'
        ], 200);
    }

    public function login(Request $request)
    {
        // 1. Validation
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // 2. Check Credentials
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Invalid login details'
            ], 401);
        }

        // 3. Find User & Create Token
        $user = User::where('email', $request->email)->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;

        // Trigger the merge
        $guestId = $request->header('X-Guest-Cart-ID');
        if ($guestId) {
            Cart::mergeGuestCart($user->id, $guestId);
        }

        // 4. Return Response
        return response()->json([
            'message' => 'Login successful',
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $user
        ]);
    }

    public function update(Request $request)
    {
        $user = $request->user();
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        try {
            $user = User::findOrFail($user->id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'User not found'], 404);
        }
        // 1. Validation
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => [
                    'required',
                    'email',
                    'max:255',
                    'regex:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/',
                    Rule::unique('users')->ignore($user->id),
                ],
                'address' => 'nullable|string|max:255',
                'phone' => 'nullable|string|min:6|max:20',

            ], [
                'email.regex' => 'The email format is invalid.',
                'email.unique' => 'The email has already been taken.',
                'email.required' => 'The email field is required.',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 422);
        }

        // 2. Prepare data for update
        $user->name = $request->name;
        $user->email = $request->email;
        $user->address = $request->address;
        $user->phone = $request->phone;

        // 3. Save to MySQL
        return DB::transaction(function () use ($user) {
            try {
                $user->save();
                return response()->json([
                    'message' => 'Profile updated successfully!',
                    'user' => $user
                ], 200);
            } catch (\Exception $e) {
                return response()->json(['message' => 'Failed to update profile', 'error' => $e->getMessage()], 500);
            }
        });
    }
}
