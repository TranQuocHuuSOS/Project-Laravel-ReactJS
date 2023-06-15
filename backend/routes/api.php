<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\APIController;	
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/get-apartment',[APIController::class,'getApartments']);					
// Route::get('/getUserApartments/{user_id}',[APIController::class,'getUserApartments']);					
Route::get('/get-apartment/{apartment_id}', [APIController::class,'getOneApartments']);								
Route::post('/add-apartment',[APIController::class,'addApartments']);								
Route::delete('/delete-apartment/{apartment_id}',[APIController::class,'deleteApartments']);								
Route::put('/edit-apartment/{apartment_id}',[APIController::class,'editApartments']);								          
Route::post('/upload-image',[APIController::class,'uploadImage']);