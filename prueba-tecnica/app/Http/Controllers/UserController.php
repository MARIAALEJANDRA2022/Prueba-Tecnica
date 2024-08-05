<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index(Request $request)
    {
        return response()->json($request->user());
    }

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

        $accessToken = $user->createToken('authToken')->plainTextToken;

        return response(['user' => $user, 'token' => $accessToken]);
    }

    public function logout(Request $request)
    {
        $user = Auth::user();
        $user->tokens()->delete(); // Revoca todos los tokens del usuario
    }
}
