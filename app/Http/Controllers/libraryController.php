<?php

namespace App\Http\Controllers;

use App\Exports\BooksExport;
use App\Imports\BooksImport;
use App\Models\Books;
use App\Models\NewBooks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class libraryController extends Controller
{
    public function search(Request $value)
    {
        $books = Books::where('title', 'LIKE', '%' . $value->value . '%')
            ->orWhere('title', 'LIKE', '%' . $value->value . '%')
            ->orWhere('author', 'LIKE', '%' . $value->value . '%')
            ->orWhere('publisher', 'LIKE', '%' . $value->value . '%')
            ->orWhere('barcode', 'LIKE', '%' . $value->value . '%')
            ->take(30)
            ->get();
        return $books;
    }

    public function addNewBook(Request $request)
    {
        $validator = $request->validate([
            'barcode' =>  'required'
        ]);
        NewBooks::create($validator);
        return $validator;
    }

    public function getNewBooks()
    {
        $newBooks = DB::table('books')->join('newbooks', 'newbooks.barcode', 'books.barcode')->get();
        return $newBooks;
    }

    public function deleteNewBook(Request $request)
    {
        $book = NewBooks::find($request->post('id'));
        $book->delete();
    }

    public function index()
    {
        // $books = newbooks::get();
        $newbooks = DB::table('books')->join('newbooks', 'newbooks.barcode', 'books.barcode')->get();
        // dd($newbooks);
        return view('books', compact('newbooks'));
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function export()
    {
        return Excel::download(new BooksExport, 'Books.xlsx');
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function import()
    {
        // dd(request()->file('file'));
        Excel::import(new BooksImport, request()->file('file'));

        return back();
    }
}
