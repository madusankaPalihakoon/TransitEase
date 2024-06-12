<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->string('number');
            $table->string('owner');
            $table->string('phone')->nullable();
            $table->date('insurance_renewal_date');
            $table->date('emission_teste_date');
            $table->date('revenue_licence_date');
            $table->enum('documents', ['clear', 'leasing'])->default('clear');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicles');
    }
};
