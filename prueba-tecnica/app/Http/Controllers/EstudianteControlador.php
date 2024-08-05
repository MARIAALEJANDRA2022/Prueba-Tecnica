<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Estudiante;

class EstudianteControlador extends Controller
{
    public function registro(Request $request)
    {
        $validateData = $request->validate([
            'name' => 'string|required|max:255',
            'lastName' => 'required|max:255',
            'email' => 'email|required|unique::estudiantes',
            'phone' => 'regex:/^\+?[1-9]\d{1,14}$/|required|max:255',
            'program' => 'string|required|max:255',
            'status' => 'string|required|max:255',
        ]);

        $estudiante = Estudiante::create($validateData);
        return response(['estudiante' => $estudiante]);

    }
}
