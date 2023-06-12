<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Encryption\Encrypter;
use Blocktrail\CryptoJSAES\CryptoJSAES;

class EncryptController extends Controller
{
    //
    public function login(Request $request)
    {
        $data = $request->data ?? "Text Halo";
        //Keys and cipher used by encrypter(s) 

        $passphrase = "ayayo";

        $encrypted = CryptoJSAES::encrypt($data, $passphrase);
        $decrypted = CryptoJSAES::decrypt($data, $passphrase);
        return response()->json([
            'username' => $data,
            'enc' => $encrypted,
            'dec' => $decrypted,
            'des' => ""
        ], 200);
    }
}
