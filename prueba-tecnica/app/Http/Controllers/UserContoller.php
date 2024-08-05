<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserContoller extends Controller
{
    public function iniciarSesion(Request $request)
    {
        $informacionInicio = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if (!auth()->attempt($informacionInicio)) {
            return response(['message' => 'El usuario o la contraseña son incorrectos'], 401);
        }

        $user = Auth::user();

        $accessToken = $user()->createToken('authToken')->plainTextToken;

        return response(['user' => $user, 'access_token' => $accessToken]);
    }
}
