<?php

namespace App\Http\Controllers;

use App\Http\Resources\PenyakitResource;
use App\Models\Gejala;
use App\Models\GejalaPenyakit;
use App\Models\Penyakit;
use Illuminate\Http\Request;

class DiagnosisController extends Controller
{

    public function diagnose(Request $request)
    {
        $list = array();
        $obj = array();
        $ea = collect();

        $tmp = "";
        foreach ($request->kode as $x) {
            $data = GejalaPenyakit::where('gejala_kode', $x)->get();

            foreach ($data as $y) {
                array_push($list, $y);

                $findme   = $y->penyakit_kode . "_";
                $pos = strpos($tmp, $findme);
                if ($pos === false) {
                    $obj[$y->penyakit_kode] = array();
                    array_push($obj[$y->penyakit_kode], $y->gejala_kode);
                    $tmp = $tmp . $y->penyakit_kode . "_";
                } else {
                    array_push($obj[$y->penyakit_kode], $y->gejala_kode);
                }
                // if ($obj[$y->penyakit_kode] === null) {
                // }
            }
        }
        foreach (array_keys($obj) as $x) {
            $ea->push([
                "data" => new PenyakitResource(Penyakit::where("kode", $x)->first()) ?? null,
                "gejala" => count($obj[$x]),
                "total_gejala" => count(GejalaPenyakit::where("penyakit_kode", $x)->get()),
            ]);
        }
        return response()->json([
            // "obj" => $obj,
            "data" => $ea,
            // "data" => array_merge_recursive($list),
        ], 200);
    }

    public function indexGejala(Request $request)
    {
        $data = Gejala::where('kode', 'LIKE', '%' . $request->cari . '%')
            ->orderBy('created_at', 'DESC')->paginate($request->limit ?? 200);
        return response()->json([
            "data" => $data
        ], 200);
    }

    public function indexPenyakit(Request $request)
    {
        $data = Penyakit::where('kode', 'LIKE', '%' . $request->cari . '%')
            ->orderBy('created_at', 'DESC')->paginate($request->limit ?? 200);
        return response()->json([
            "data" => $data
        ], 200);
    }

    public function indexRelasi(Request $request)
    {
        $data = GejalaPenyakit::where('penyakit_kode', 'LIKE', '%' . $request->cari . '%')
            ->orderBy('created_at', 'DESC')->paginate($request->limit ?? 200);
        return response()->json([
            "data" => $data
        ], 200);
    }


    public function storeRelasi(Request $request)
    {
        $credentials = $request->validate([
            'gejala_kode' => 'required',
            'penyakit_kode' => 'required',
        ]);
        $user = GejalaPenyakit::create([
            'gejala_kode' => $request->gejala_kode,
            'penyakit_kode' => $request->penyakit_kode,
        ]);
        return response()->json([
            "data" => $user
        ], 200);
    }

    public function storeGejala(Request $request)
    {
        $credentials = $request->validate([
            'kode' => 'required',
            'value' => 'required',
        ]);
        $user = Gejala::create([
            'kode' => $request->kode,
            'value' => $request->value,
        ]);
        return response()->json([
            "data" => $user
        ], 200);
    }


    public function storePenyakit(Request $request)
    {
        $credentials = $request->validate([
            'kode' => 'required',
            'value' => 'required',
        ]);
        $user = Penyakit::create([
            'kode' => $request->kode,
            'value' => $request->value,
        ]);
        return response()->json([
            "data" => $user
        ], 200);
    }


    public function deleteGejala($id)
    {
        $user = Gejala::find($id);
        $user->delete();
        return response()->json([
            'message' => 'Berhasil hapus',
            'data' => $user,
        ], 200);
    }


    public function deletePenyakit($id)
    {
        $user = Penyakit::find($id);
        $user->delete();
        return response()->json([
            'message' => 'Berhasil hapus',
            'data' => $user,
        ], 200);
    }

    public function deleteRelasi($id)
    {
        $user = GejalaPenyakit::find($id);
        $user->delete();
        return response()->json([
            'message' => 'Berhasil hapus',
            'data' => $user,
        ], 200);
    }
}
