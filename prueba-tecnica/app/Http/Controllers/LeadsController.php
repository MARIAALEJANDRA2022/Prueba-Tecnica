<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Leads;

class LeadsController extends Controller
{

    public function index()
    {
        $leads = Leads::all();
        return response()->json($leads);
    }

    public function registro(Request $request)
    {
        $validateData = $request->validate([
            'name' => 'string|required|max:255',
            'lastName' => 'required|max:255',
            'email' => 'email|required|unique:estudiantes',
            'phone' => 'required|regex:/^[0-9]{10}$/',
            'program' => 'string|required|max:255',
            'status' => 'string|required|max:255',
        ]);

        $estudiante = Leads::create($validateData);

        return response(['estudiante' => $estudiante]);
    }

    public function actualizarEstado(Request $request, $id)
    {
        $estudiante = Leads::findOrFail($id);
        $validateData = $request->validate([
            'status' => 'string|required|max:255',
        ]);

        $estudiante->update([
            'status' => $validateData['status'],
        ]);

        return response()->json(['message' => 'Estado actualizado correctamente']);
    }

    public function buscar(Request $request)
    {
        $query = $request->input('query');

        $estudiantes = Leads::where('name', 'like', "%$query%")
                                 ->orWhere('lastName', 'like', "%$query%")
                                 ->orWhere('email', 'like', "%$query%")
                                 ->orWhere('phone', 'like', "%$query%")
                                 ->orWhere('program', 'like', "%$query%")
                                 ->orWhere('status', 'like', "%$query%")
                                 ->get();

        return response()->json($estudiantes);
    }
}
