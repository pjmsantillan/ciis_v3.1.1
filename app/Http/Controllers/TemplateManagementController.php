<?php

namespace App\Http\Controllers;

use App\Models\TemplateManagement;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TemplateManagementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('template-management/index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('template-management/rich-text-editor/editor-create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validated = $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);

        $template = TemplateManagement::create($validated);
        return redirect()->back()->with('success', 'Template created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(TemplateManagement $templateManagement)
    {
        //
        return Inertia::render('template-management/rich-text-editor/editor-create', [
            'TemplateManagement' => $templateManagement
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TemplateManagement $templateManagement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TemplateManagement $templateManagement)
    {
        //
        $validated = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'status' => 'required'
        ]);
        $templateManagement->update($validated);
        return redirect()->route('templates.index')->with(['success', ' Updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TemplateManagement $templateManagement)
    {
        //
        $templateManagement->delete();

        return redirect()->route('templates.index')->with(['success', 'Deleted successfully']);
    }
}
