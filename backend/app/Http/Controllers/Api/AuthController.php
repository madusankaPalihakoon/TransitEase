<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            // Validation
            $request->validate([
                'name' => 'required',
                'email' => 'required|email|unique:users',
                'password' => 'required|min:8|confirmed',
            ]);

            // Create user
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            // Send verification email
            $user->sendEmailVerificationNotification();

            // Generate token
            $token = JWTAuth::fromUser($user);

            // Response
            return response()->json([
                'status' => true,
                'message' => 'Registration successful! Please check your email to verify your account.',
                'token' => $token,
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'status' => false,
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Registration Failed!',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
    public function login(Request $request)
    {
        // Data validation
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        try {
            // Find the user by email
            $user = User::where('email', $request->email)->first();

            // Check if the user exists
            if (!$user) {
                return response()->json([
                    'status' => false,
                    'message' => 'User not found',
                ], 404); // Not Found
            }

            // Check if the user has a verified email
            if (!$user->hasVerifiedEmail()) {
                return response()->json([
                    'status' => false,
                    'message' => 'Email not verified',
                ], 401); // Unauthorized
            }

            // Attempt to generate JWT token
            if (!$token = JWTAuth::attempt($request->only('email', 'password'))) {
                return response()->json([
                    'status' => false,
                    'message' => 'Invalid credentials',
                ], 401); // Unauthorized
            }

            // Response
            return response()->json([
                'status' => true,
                'message' => 'User logged in successfully',
                'token' => $token,
                'user' => $user,
            ]);
        } catch (JWTException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to create token',
            ], 500); // Internal Server Error
        }
    }


    public function profile()
    {
        try {
            // Check if user is authenticated
            $user = auth()->user();

            if (!$user) {
                return response()->json([
                    'status' => false,
                    'message' => 'Unauthorized',
                ], 401);
            }

            // Response
            return response()->json([
                'status' => true,
                'message' => 'Profile Data',
                'user' => $user,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to fetch profile',
                'error' => $e->getMessage(),
            ], 500);
        }
    }


    public function refreshToken()
    {
        try {
            // Attempt to refresh the token using the current token
            $newToken = JWTAuth::refresh();

            // Response with the new token
            return response()->json([
                'status' => true,
                'message' => 'Refresh token generated successfully',
                'token' => $newToken,
            ]);
        } catch (JWTException $e) {
            // Handle token refresh failure
            return response()->json([
                'status' => false,
                'message' => 'Failed to refresh token',
                'error' => $e->getMessage(),
            ], 401);
        }
    }


    public function logout()
    {
        try {
            // Attempt to invalidate the token
            auth()->logout();

            // Response
            return response()->json([
                'status' => true,
                'message' => 'Logout successfully!',
            ]);
        } catch (JWTException $e) {
            // Handle token invalidation failure
            return response()->json([
                'status' => false,
                'message' => 'Failed to logout, please try again.',
                'error' => $e->getMessage(),
            ], 500); // Internal Server Error
        }
    }
}
