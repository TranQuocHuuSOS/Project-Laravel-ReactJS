<?php

use App\Http\Controllers\EmailController;
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
// Route::get('/get-idAddress',[APIController::class,'getIDAddress']);					
Route::get('/get-apartment/{apartment_id}', [APIController::class,'getOneApartments']);								
Route::post('/add-apartment',[APIController::class,'addApartments']);								
Route::delete('/delete-apartment/{apartment_id}', [APIController::class,'deleteApartments']);
Route::put('/edit-apartment/{apartment_id}',[APIController::class,'editApartments']);								          
Route::post('/upload-image',[APIController::class,'uploadImage']);




Route::get('/get-address',[APIController::class,'getAddresses']);					
Route::get('/get-address/{address_id}', [APIController::class,'getOneAddresses']);								
Route::post('/add-address',[APIController::class,'addAddresses']);								
Route::delete('/delete-address/{address_id}', [APIController::class,'deleteAddresses']);
Route::put('/edit-address/{address_id}',[APIController::class,'editAddresses']);								          
Route::post('/upload-image',[APIController::class,'uploadImage']);



Route::get('/get-user',[APIController::class,'getUser']);
Route::get('/get-user/{id}', [APIController::class,'getOneUsers']);								
Route::delete('/delete-user/{id}', [APIController::class,'deleteUsers']);


///-------------------------Apointment-------------------------///
Route::get('/get-appointment',[APIController::class,'getAppointment']);	
Route::get('/get-appointment/{appointment_id}', [APIController::class,'getOneAppointment']);	

//---------------gửi email xạc nhận--------------//
Route::get('/send-email', [EmailController::class, 'sendEmail'])->name('sendEmail');

