<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    use HasFactory;

    public static function generateShopId()
    {
        $year = now()->format('Y');  // Current year
        $month = now()->format('m'); // Current month
        $hour = now()->format('H');  // Current hour
        $randomInt = mt_rand(10, 99); // Random 2-digit number

        return $year . $month . $hour . $randomInt . 'SHP';
    }
}
