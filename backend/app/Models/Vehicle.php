<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $fillable = ['number', 'owner', 'phone', 'insurance_renewal_date', 'emission_teste_date', 'revenue_licence_date', 'documents',];
}
