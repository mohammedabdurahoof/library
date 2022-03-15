@extends('layouts.app')

@section('content')
    <div class="login-box">
        <h2>Register</h2>
        <form method="POST" action="{{ route('register') }}" id="form">
            @csrf

            <div class="user-box">
                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name"
                    value="{{ old('name') }}" required autocomplete="name" autofocus>
                <label>Name</label>
                @error('name')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="user-box">
                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email"
                    value="{{ old('email') }}" required autocomplete="email" autofocus>
                <label>Email</label>
                @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="user-box">
                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror"
                    name="password" required autocomplete="current-password">
                <label>Password</label>
                @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
            <div class="user-box">
                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required
                    autocomplete="new-password">
                <label>Confirm Password</label>
            </div>
            {{-- <div class="reg">
                Already registered? <span href="{{ route('login') }}" onclick="linkChange()" id="linkChange">Login</span>
            </div> --}}
            {{-- <button type="submit"  class="btn btn-primary"> --}}
            <a onclick="submit()">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
            </a>
            {{-- </button> --}}
        </form>
    </div>
    <script type="text/javascript">
        function linkChange() {
            location.href = '/register'
        }

        function submit() {
            document.getElementById("form").submit();
        }
    </script>
@endsection
