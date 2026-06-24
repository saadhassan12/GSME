<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ContactFormMail;
use App\Models\ContactMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:5000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Please check your form and try again.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $data = $validator->validated();

        ContactMessage::create($data);

        $recipientEmail = env('CONTACT_EMAIL', 'fareedanoori8855@gmail.com');

        try {
            Mail::to($recipientEmail)->send(new ContactFormMail($data));
        } catch (\Exception $e) {
            // Message saved to DB even if email fails
        }

        return response()->json([
            'success' => true,
            'message' => 'Thank you for contacting GSME! We will get back to you shortly.',
        ], 201);
    }
}
