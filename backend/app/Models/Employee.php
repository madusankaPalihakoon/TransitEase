<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = ['employee_id', 'name', 'nic', 'email', 'phone', 'position', 'salary', 'bank', 'account', 'working_status', 'appointment_date'];

    // Method to generate the unique employee ID
    public static function generateEmployeeId()
    {
        $year = now()->format('Y');  // Current year
        $month = now()->format('m'); // Current month
        $hour = now()->format('H');  // Current hour
        $randomInt = mt_rand(10, 99); // Random 2-digit number

        return $year . $month . $hour . $randomInt . 'EMP';
    }
}
