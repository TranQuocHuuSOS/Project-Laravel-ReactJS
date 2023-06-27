<?php

use App\Mail\Failemail;
use App\Mail\GuiEmail;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


//------sendmail------------//
Route::get("/mailsuccessfull", function(Request $request) {
    $email = $request->input('email');
    Mail::mailer('mailgun')
        ->to($email)
        ->send(new GuiEmail());
});

Route::get("/failemail", function(Request $request) {
    $email = $request->input('email');
    Mail::mailer('mailgun')
        ->to($email)
        ->send(new Failemail());
});
