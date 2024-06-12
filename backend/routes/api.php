<?php

use App\Http\Controllers\EmployeeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\User;
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

Route::post("register", [AuthController::class, "register"]);
Route::post("login", [AuthController::class, "login"]);

Route::middleware('auth:api')->group(function () {
    Route::get('/profile', [AuthController::class, 'profile']);
    Route::get('/refresh', [AuthController::class, 'refreshToken']);
    Route::get('/logout', [AuthController::class, 'logout']);
    Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
        return $request->fulfill();
    })->middleware('auth:api')->name('verification.verify');
    Route::post('/email/resend', function (Request $request) {
        $user = Auth::user();
    
        if ($user->hasVerifiedEmail()){
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
});

Route::post('/employee/store', [EmployeeController::class, 'store']);
Route::get('/employees', [EmployeeController::class, 'index']);
Route::post('/employee', [EmployeeController::class, 'show']);
Route::post('/employee/update', [EmployeeController::class, 'update']);
Route::post('/employee/delete', [EmployeeController::class, 'delete']);







