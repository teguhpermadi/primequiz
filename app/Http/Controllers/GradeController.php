<?php

namespace App\Http\Controllers;

use App\Models\Grade;
use App\Http\Requests\StoreGradeRequest;
use App\Http\Requests\UpdateGradeRequest;
use Inertia\Inertia;

class GradeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Grade/Index', [
            'grades' => Grade::latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Grade/Create', [
            'grades' => Grade::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGradeRequest $request)
    {
        $validated = $request->validated();

        Grade::create($validated);

        return to_route('grades.index')->with('success', 'Grade created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Grade $grade)
    {
        return Inertia::render('Grade/Show', [
            'grade' => $grade,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Grade $grade)
    {
        return Inertia::render('Grade/Edit', [
            'grade' => $grade,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGradeRequest $request, Grade $grade)
    {
        $validated = $request->validated();

        $grade->update($validated);

        return to_route('grades.index')->with('success', 'Grade updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($grade)
    {
        if(is_array($grade)) {
            Grade::whereIn('id', $grade)->delete();
        } else {
            Grade::destroy($grade);
        }

        return to_route('grades.index')->with('success', 'Grade deleted successfully.');
    }
}
