<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    //return view('welcome');
    return view('sample/index');
});

/*Route::get('/sample', function () {
    return view('sample/index');  
});*/
Route::group(['prefix' => 'api'], function() {
    //Route::controller('user', 'SampleController');
    Route::post('users/changestatus', 'UserController@changestatus');
    Route::resource('user', 'SampleController');
    Route::resource('users', 'UserController');
    
    //Route::get('userlist', 'SampleController@index');
});
Route::any('{undefinedRoute}', function ($undefinedRoute) {
    return view('sample/index');
})->where('undefinedRoute', '([A-z\d-\/_.]+)?');


//Route::get('/sample', "SampleController@index");
