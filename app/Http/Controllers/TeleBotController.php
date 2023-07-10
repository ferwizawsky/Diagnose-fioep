<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Telegram\Bot\Laravel\Facades\Telegram;

class TeleBotController extends Controller
{
    //
    public function sendDummy()
    {

        // return response()->json(["data" => "success"]);

        $current_date_time = Carbon::now()->locale('id-ID')->translatedFormat('d F Y - H:i');
        return Telegram::sendMessage([
            // 'chat_id' => 1356034136,
            'chat_id' => 1083511163,
            'text' => "Dilakukan Penyiraman Pada " . $current_date_time
        ]);
    }
    public function setWebhook()
    {
        $response = Telegram::setWebhook(['url' => env('TELEGRAM_WEBHOOK_URL')]);
        dd($response);
    }

    public function commandHandlerWebHook()
    {
        $updates = Telegram::commandsHandler(true);
        $chat_id = $updates->getChat()->getId();
        $username = $updates->getChat()->getFirstName();

        if (strtolower($updates->getMessage()->getText() === 'halo')) return Telegram::sendMessage([
            'chat_id' => $chat_id,
            'text' => 'Halo ' . $username . ' - ID ' . $chat_id
        ]);
    }
}
