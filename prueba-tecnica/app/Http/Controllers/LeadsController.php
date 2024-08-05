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

    public function buscarPorNombre(Request $request)
    {
        $query = $request->input('name');

        $estudiante = Leads::where('name', '=', $query)->get();

        return response()->json($estudiante);
    }

    public function buscarPorApellido(Request $request)
    {
        $query = $request->input('lastName');

        $estudiante = Leads::where('lastName', '=', $query)->get();

        return response()->json($estudiante);
    }

    public function buscarPorEmail(Request $request)
    {
        $query = $request->input('email');

        $estudiante = Leads::where('email', '=', $query)->get();

        return response()->json($estudiante);
    }

    public function actualizarDatosPorNombreApellido(Request $request, $name, $lastName)
    {
        $estudiante = Leads::where('name', $name)
                            ->where('lastName', $lastName)
                            ->firstOrFail();

        $validateData = $request->validate([
            'email' => 'email|required|unique:estudiantes',
            'phone' => 'required|regex:/^[0-9]{10}$/',
            'program' => 'string|required|max:255',
            'status' => 'string|required|max:255',
        ]);

        $estudiante->update([
            'email' => $validateData['email'],
            'phone' => $validateData['phone'],
            'program' => $validateData['program'],
            'status' => $validateData['status'],
        ]);

        return response()->json(['message' => 'Datos actualizados correctamente']);
    }

    public function actualizarDatosPorEmail(Request $request, $email)
    {
        $estudiante = Leads::where('email', $email)->findOrFail();

        $validateData = $request->validate([
            'name' => 'string|required|max:255',
            'lastName' => 'required|max:255',
            'phone' => 'required|regex:/^[0-9]{10}$/',
            'program' => 'string|required|max:255',
            'status' => 'string|required|max:255',
        ]);

        $estudiante->update([
            'name' => $validateData['name'],
            'lastName' => $validateData['lastName'],
            'phone' => $validateData['phone'],
            'program' => $validateData['program'],
            'status' => $validateData['status'],
        ]);

        return response()->json(['message' => 'Datos actualizados correctamente']);
    }
}
