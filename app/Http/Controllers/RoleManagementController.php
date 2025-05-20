<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RoleManagementController extends Controller
{
    public function index()
    {
        return inertia('role-management/index');
    }
}
