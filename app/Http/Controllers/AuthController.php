<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function user()
    {
        return response([
            "data" => "ok"
        ], 401);
    }
}
