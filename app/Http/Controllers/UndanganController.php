<?php

namespace App\Http\Controllers;

use DOMDocument;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UndanganController extends Controller
{
    public function preview()
    {
        return Storage::get('file/preview.html');
    }

    public function show()
    {
        $preview = view("preview")->render();
        // Storage::put('file/preview.txt', $preview);
        $data =  Storage::get('file/preview.html');

        $dochtml = new DOMDocument();
        @$dochtml->loadHTML($preview);
        $config = $dochtml->getElementsByTagName("config")->nodeValue;
    }

    public function getTemplate(Request $request, $id)
    {
        return response([
            "data" => [
                "top" => "<html><head><script src='https://cdn.tailwindcss.com'></script></head><body><div id='app' class='min-h-screen pt-0 pb-10 bg-gray-100 '>",
                "bot" => "</div></body><style>
/* width */
::-webkit-scrollbar {
    width: 0.32rem;
    height: 0rem;
}

/* Track */
::-webkit-scrollbar-track {
    background: #ddd;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #bbb;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #111;
}
</style></html>"
            ]
        ], 200);
    }
}
