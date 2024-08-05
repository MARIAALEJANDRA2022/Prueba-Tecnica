<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LeadsController;
use App\Http\Controllers\UserController;

Route::post('/registro', [LeadsController::class, 'registro']);
Route::post('/login', [UserController::class, 'iniciarSesion']);
Route::get('/leads', [LeadsController::class, 'index']);
Route::put('/leads/{id}', [LeadsController::class, 'actualizarEstado']);
Route::middleware('auth:sanctum')->get('/user', [UserController::class, 'index']);
Route::middleware('auth:sanctum')->post('/logout', [UserController::class, 'logout']);
Route::get('/buscar', [LeadsController::class, 'buscar']);
