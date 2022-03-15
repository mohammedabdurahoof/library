@extends('layouts.app')

@section('content')
    <div class="login-box">
        <h2>Login</h2>
        <form method="POST" action="{{ route('login') }}" id="form">
            @csrf
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
            {{-- <div class="reg">
                Not registered? <span href="{{ route('register') }}" onclick="linkChange()" id="linkChange">Create an
                    account </span>
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
