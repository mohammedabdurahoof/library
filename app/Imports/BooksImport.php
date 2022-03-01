<?php

namespace App\Imports;

use App\Models\Books;
use Maatwebsite\Excel\Concerns\ToModel;

class BooksImport implements ToModel
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        return new Books([
            'barcode'     => $row[0],
            'dateaccessioned'    => $row[1],
            'itemcallnumber'     => $row[2],
            'author'     => $row[3],
            'title'     => $row[4],
            'pages'     => $row[5],
            'publisher'     => $row[6],
            'type'     => $row[7],
        ]);
    }
}
