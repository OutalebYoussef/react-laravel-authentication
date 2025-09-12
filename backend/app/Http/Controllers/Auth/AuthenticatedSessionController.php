<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request, string $expectedRole = 'user'): JsonResponse
    {
        $request->authenticate();

        $guards = ['web', 'admin'];
        $user = collect($guards)
            ->map(fn($guard) => Auth::guard($guard)->user())
            ->firstWhere(fn($u) => !is_null($u));

        if (!$user || $user->role !== $expectedRole) {
            foreach ($guards as $guard) {
                Auth::guard($guard)->logout();
            }
            return response()->json(['message' => "Access denied: not a {$expectedRole}."], 403);
        }

        $user->update(['status' => 'online']);
        $request->session()->regenerate();

        return response()->json([
            'user'  => $user,
            'token' => $user->createToken('api', [$user->getRoleAttribute()])->plainTextToken,
        ]);
    }


    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        $guards = ['web', 'admin'];
        $user = null;
        foreach ($guards as $guard) {
            $currentGuard = Auth::guard($guard);
            if ($currentGuard->check()) {
                $user = $currentGuard->user();
                break;
            }
        }

        $request->user()->update(['status' => 'offline']);
        $request->user()->tokens()->delete();

        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
