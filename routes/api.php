<?php

use App\Http\Controllers\DiagnosisController;
use App\Http\Controllers\TeleBotController;
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

Route::get('/tele', "TeleBotController@sendDummy");
Route::get('setWebhook', [TeleBotController::class, 'setWebhook']);
Route::post('webhook', [TeleBotController::class, 'commandHandlerWebHook']);

Route::post('/diagnose', "DiagnosisController@diagnose");
Route::post('/login', "UserController@login");
Route::prefix('diagnose')
    // ->middleware('role:superadmin')
    ->controller(DiagnosisController::class)
    ->group(function () {
        Route::get('/gejala', 'indexGejala');
        Route::post('/gejala', 'storeGejala');
        Route::delete('/gejala/{id}', 'deleteGejala');
        Route::get('/penyakit', 'indexPenyakit');
        Route::post('/penyakit', 'storePenyakit');
        Route::delete('/penyakit/{id}', 'deletePenyakit');
        Route::get('/relasi', 'indexRelasi');
        Route::post('/relasi', 'storeRelasi');
        Route::delete('/relasi/{id}', 'deleteRelasi');
    });
Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('user')
        // ->middleware('role:superadmin')
        ->controller(UserController::class)
        ->group(function () {
            Route::get('/', 'profil');
            // Route::post('/', 'store');
        });
    Route::prefix('auth')->controller(UserController::class)->group(function () {
        Route::get('/profile', 'profile');
        Route::get('/logout', 'logout');
    });
    Route::prefix('user')->controller(UserController::class)->group(function () {
        Route::get('/', 'index');
        Route::post('/', 'store');
        Route::delete('/{id}', 'delete');
    });
});
// Route::get('/preview', "UndanganController@preview");
// Route::get('/show', "UndanganController@show");
