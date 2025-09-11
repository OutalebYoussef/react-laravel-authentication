<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum','ability:user,admin'])->group(function () {
    Route::get('/me', function (Request $request) {
        return $request->user();
    });
});

require __DIR__.'/auth.php';
