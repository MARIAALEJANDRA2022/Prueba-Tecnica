<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('lastName');
            $table->string('email')->unique();
            $table->string('password');
            $table->timestamps();
        });

        DB::table('users')->insert([
            [
                'name' => 'Maria Alejandra',
                'lastName' => 'Ramirez Montenegro',
                'email' => 'admin@abcAprender.com',
                'password' => bcrypt('admin'),
            ],
            [
                'name' => 'David Alejandro',
                'lastName' => 'Delgado Esparza',
                'email' => 'gestor@abcAprender.com',
                'password' => bcrypt('gestor'),
            ]
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
