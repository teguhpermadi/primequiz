<?php

namespace App\Http\Controllers;

use App\Enums\SemesterEnum;
use App\Models\AcademicYear;
use App\Http\Requests\StoreAcademicYearRequest;
use App\Http\Requests\UpdateAcademicYearRequest;
use Inertia\Inertia;

class AcademicYearController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('AcademicYear/Index', [
            'academicYears' => AcademicYear::latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $semester = collect(SemesterEnum::cases())->map(fn($semester) => [
            'name' => ucfirst(strtolower($semester->label())), // atau ubah sesuai kebutuhan
            'code' => $semester->value,
        ]);
        
        return Inertia::render('AcademicYear/Create', [
            'semester' => $semester,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAcademicYearRequest $request)
    {
        $validated = $request->validated();
        AcademicYear::create($validated);
        return to_route('academic-year.index')->with('success', 'Academic Year created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(AcademicYear $academicYear)
    {
        $semester = collect(SemesterEnum::cases())->map(fn($semester) => [
            'name' => ucfirst(strtolower($semester->label())), // atau ubah sesuai kebutuhan
            'code' => $semester->value,
        ]);

        return Inertia::render('AcademicYear/Show', [
            'academicYear' => $academicYear,
            'semester' => $semester,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AcademicYear $academicYear)
    {
        $semester = collect(SemesterEnum::cases())->map(fn($semester) => [
            'name' => ucfirst(strtolower($semester->label())), // atau ubah sesuai kebutuhan
            'code' => $semester->value,
        ]);

        return Inertia::render('AcademicYear/Edit', [
            'academicYear' => $academicYear,
            'semester' => $semester,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAcademicYearRequest $request, AcademicYear $academicYear)
    {
        $validated = $request->validated();
        $academicYear->update($validated);
        return to_route('academic-year.index')->with('success', 'Academic Year updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($academicYear)
    {
        if(\is_array($academicYear)) {
            AcademicYear::whereIn('id', $academicYear)->delete();
        } else {
            AcademicYear::destroy($academicYear);
        }

        return to_route('academic-year.index')->with('success', 'Academic Year deleted successfully!');
    }
}
