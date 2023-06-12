<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', "UserController@login");
Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('user')
        // ->middleware('role:superadmin')
        ->controller(UserController::class)
        ->group(function () {
            Route::get('/', 'profil');
            Route::post('/', 'store');
        });
});
// Route::get('/preview', "UndanganController@preview");
// Route::get('/show', "UndanganController@show");
