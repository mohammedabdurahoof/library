<?php

use App\Http\Controllers\libraryController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});

require __DIR__.'/auth.php';

Auth::routes();


Route::get('/books', [libraryController::class, 'index'])->middleware('auth');
Route::post('/import', [libraryController::class, 'import'])->middleware('auth')->name('import');
Route::get('/export', [libraryController::class, 'export'])->middleware('auth')->name('export');
Route::post('/add-new-book', [libraryController::class, 'addNewBook'])->middleware('auth')->name('addNewBook');
Route::get('/get-new-book', [libraryController::class, 'getNewBooks'])->name('getNewBooks');
Route::post('/delete-new-book', [libraryController::class, 'deleteNewBook'])->middleware('auth')->name('deleteNewBook');
Route::post('/search', [libraryController::class, 'search'])->name('search');
