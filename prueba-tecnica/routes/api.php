<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EstudianteControlador;
use App\Http\Controllers\UserContoller;

Route::post('/registro', [EstudianteControlador::class, 'registro']);
Route::post('/login', [UserContoller::class, 'iniciarSesion']);
