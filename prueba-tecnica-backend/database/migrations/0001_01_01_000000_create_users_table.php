<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

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
                'email' => 'admin@abcaprender.com',
                'password' => bcrypt('admin'),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name' => 'Juan Camilo',
                'lastName' => 'Poloche Garzon',
                'email' => 'gestor@abcaprender.com',
                'password' => bcrypt('gestor'),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
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
