<!DOCTYPE html>
<html>

<head>
    <title>Al-jawahir library</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
</head>

<body>

    <div class="container">
        <div class="card bg-light mt-3">
            <div class="card-header">
                Books Export And Import
            </div>
            <div class="card-body">
                <form action="{{ route('import') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <input type="file" name="file" class="form-control">
                    <br>
                    <button class="btn btn-success">Import Books Data</button>
                </form>
                <a class="btn btn-warning float-end" href="{{ route('export') }}">Export Books Data</a>

                <table class="table table-bordered mt-5">
                    <tr>
                        <th colspan="5">
                            List Of Users
                            <div id="model" class="float-end"></div>
                        </th>
                    </tr>
                    <tr>
                        <th>BARCODE</th>
                        <th>CALL NO</th>
                        <th>TITLE</th>
                        <th>AUTHOR</th>
                        <th>TYPE</th>
                    </tr>
                    @foreach ($newbooks as $book)
                        <tr>
                            <td>{{ $book->barcode }}</td>
                            <td>{{ $book->itemcallnumber }}</td>
                            <td>{{ $book->title }}</td>
                            <td>{{ $book->author }}</td>
                            <td>{{ $book->type }}</td>
                        </tr>
                    @endforeach
                </table>

            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="assets/js/script.js"></script>
    <script src="{{ mix('js/app.js') }}"></script>

</body>

</html>
