<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EstudianteControlador;

Route::post('/registro', [EstudianteControlador::class, 'registro']);
