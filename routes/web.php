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

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/books', [libraryController::class, 'index']);
Route::post('/import', [libraryController::class, 'import'])->name('import');
Route::get('/export', [libraryController::class, 'export'])->name('export');
Route::post('/add-new-book', [libraryController::class, 'addNewBook'])->name('addNewBook');
Route::get('/get-new-book', [libraryController::class, 'getNewBooks'])->name('getNewBooks');
Route::post('/delete-new-book', [libraryController::class, 'deleteNewBook'])->name('deleteNewBook');
