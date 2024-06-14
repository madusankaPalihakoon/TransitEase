<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class EmailVerificationController extends Controller
{
    public function verify(EmailVerificationRequest $request, $id, $hash, $expires)
    {
        if ($this->isVerificationLinkExpired($expires))
        {
            return response()->json(['message' => 'Verification link has expired.'], 422);
        }

        if ($request->user()->hasVerifiedEmail())
        {
            return response()->json(['message' => 'Email already verified.'], 200);
        }

        if ($request->fulfill())
        {
            event(new Verified($request->user()));
            return response()->json(['message' => 'Email verified successfully.'], 200);
        }

        return response()->json(['message' => 'Unable to verify email.'], 500);
    }

    private function isVerificationLinkExpired($expires): bool
    {
        $expires = Carbon::createFromTimestamp($expires);
        if (Carbon::now()->isAfter($expires))
        {
            return true;
        }
        return false;
    }

    public function resend(Request $request)
    {
        $user = $request->user();

        if ($user->hasVerifiedEmail())
        {
            return response()->json(['message' => 'Email already verified.'], 200);
        }

        $user->sendEmailVerificationNotification();

        return response()->json([
            'message' => 'Verification email sent.'
        ], 200);
    }
}
