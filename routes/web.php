<?php

use App\Http\Controllers\RoleManagementController;
use App\Http\Controllers\UserManagementController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // User Management
    Route::group(['prefix' => 'user-management'], function () {
        Route::get('/', [UserManagementController::class, 'index'])->name('user-management');
        Route::put('update/{user}', [UserManagementController::class, 'updateStatus'])->name('user-management.updateStatus');
    });

    // Role Management
    Route::get('role-management', [RoleManagementController::class, 'index'])->name('role-management');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
