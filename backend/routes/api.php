<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ApiController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("register", [ApiController::class, "register"]);
Route::post("login", [ApiController::class, "login"]);

Route::middleware('auth:api')->get('/profile', [ApiController::class, 'profile']);
Route::middleware('auth:api')->get('/refresh', [ApiController::class, 'refreshToken']);
Route::middleware('auth:api')->get('/logout', [ApiController::class, 'logout']);

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    return $request->fulfill();
})->middleware('auth:api')->name('verification.verify');


Route::post('/email/resend', function (Request $request) {
    $user = Auth::user();

    if ($user->hasVerifiedEmail()) {
        return response()->json([
            'status' => false,
            'message' => 'Email is already verified.',
        ], 422);
    }

    $user->sendEmailVerificationNotification();

    return response()->json([
        'status' => true,
        'message' => 'Verification email resent successfully.',
    ],200);
})->middleware('auth:api');

