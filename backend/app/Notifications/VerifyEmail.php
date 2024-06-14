<?php
namespace App\Notifications;

use Illuminate\Auth\Notifications\VerifyEmail as VerifyEmailNotification;
use Illuminate\Notifications\Messages\MailMessage;
use Carbon\Carbon;

class VerifyEmail extends VerifyEmailNotification
{
    public function toMail($notifiable)
    {
        $verificationUrl = $this->verificationUrl($notifiable);

        return (new MailMessage)
            ->view('auth.verificationEmail', ['url' => $verificationUrl]);
    }


    protected function verificationUrl($notifiable)
    {
        $id = $notifiable->getKey();
        $hash = sha1($notifiable->getEmailForVerification());
        $expires = Carbon::now()->addMinutes(5)->timestamp;

        return url("http://localhost:5173/emailverification/{$id}/{$hash}/{$expires}");
    }

}
