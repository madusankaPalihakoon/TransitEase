<?php

use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\VehicleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
‍| use x-www-form-urlencoded for send data
| auth:api middleware for only can access registerd and !email_verified users
| auth:api && verified middleware for registerd and email_verified users
|
*/

Route::post("register", [AuthController::class, "register"]); //register api
Route::post("login", [AuthController::class, "login"]); //login api

Route::middleware('auth:api')->group(function () {
    // this all api can access only using valid Authorization Bearer token using only
    Route::get('/verify/{id}/{hash}/{expires}', [EmailVerificationController::class, 'verify']);
    Route::post('/verify', [EmailVerificationController::class, 'resend']);

    Route::get('/profile', [AuthController::class, 'profile']);
    Route::get('/refresh', [AuthController::class, 'refreshToken']);
    Route::get('/logout', [AuthController::class, 'logout']);

    Route::middleware('verified')->group(function () {
        // this all api can access only using valid Authorization Bearer token and this token user has been email verified
        Route::post('/employee/store', [EmployeeController::class, 'store']);
        Route::get('/employees', [EmployeeController::class, 'index']);
        Route::get('/employee/{employee_id}', [EmployeeController::class, 'show']);
        Route::put('/employee/{employee_id}', [EmployeeController::class, 'update']);
        Route::delete('/employee/{employee_id}', [EmployeeController::class, 'delete']);

        Route::post('/shop/store', [ShopController::class, 'store']);
        Route::get('/shops', [ShopController::class, 'index']);
        Route::get('/shop/{shop_id}', [ShopController::class, 'show']);
        Route::put('/shop/{shop_id}', [ShopController::class, 'update']);
        Route::delete('/shop/{shop_id}', [ShopController::class, 'delete']);

        Route::post('/vehicle/store', [VehicleController::class, 'store']);
        Route::get('/vehicles', [VehicleController::class, 'index']);
        Route::get('/vehicle/{number}', [VehicleController::class, 'show']);
        Route::put('/vehicle/{number}', [VehicleController::class, 'update']);
        Route::delete('/vehicle/{number}', [VehicleController::class, 'delete']);
    });
});
