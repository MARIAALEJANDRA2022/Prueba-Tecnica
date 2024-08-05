<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Estudiante extends Authenticatable
{
    use HasFactory;

    protected $fillable = [
        'name',
        'lastName',
        'email',
        'phone',
        'program',
        'status'
    ];
}
