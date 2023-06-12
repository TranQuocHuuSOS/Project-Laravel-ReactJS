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


Route::get('/get-apartment',[App\Http\Controllers\APIController::class,'getApartments']);					
Route::get('/get-apartment/{apartment_id}', [App\Http\Controllers\APIController::class,'getOneApartments']);								
Route::post('/add-apartment',[App\Http\Controllers\APIController::class,'addApartments']);								
Route::delete('/delete-apartment/{apartment_id}', [App\Http\Controllers\APIController::class,'deleteApartments']);
Route::put('/edit-apartment/{apartment_id}',[App\Http\Controllers\APIController::class,'editApartments']);								          
Route::post('/upload-image',[App\Http\Controllers\APIController::class,'uploadImage']);




Route::get('/get-address',[App\Http\Controllers\APIController::class,'getAddresses']);					
Route::get('/get-address/{address_id}', [App\Http\Controllers\APIController::class,'getOneAddresses']);								
Route::post('/add-address',[App\Http\Controllers\APIController::class,'addAddresses']);								
Route::delete('/delete-address/{address_id}', [App\Http\Controllers\APIController::class,'deleteAddresses']);
Route::put('/edit-address/{address_id}',[App\Http\Controllers\APIController::class,'editAddresses']);								          
Route::post('/upload-image',[App\Http\Controllers\APIController::class,'uploadImage']);