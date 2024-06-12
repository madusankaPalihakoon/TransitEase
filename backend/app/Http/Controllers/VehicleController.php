<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     * GET /vehicles
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $vehicles = Vehicle::all();
        return response()->json($vehicles);
    }

    /**
     * Store a newly created resource in storage.
     * POST /vehicles
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'number' => 'required|string|max:50|unique:vehicles',
                'owner' => 'required|string|max:100',
                'phone' => 'nullable|string|max:100',
                'insurance_renewal_date' => 'required|date',
                'emission_teste_date' => 'required|date',
                'revenue_licence_date' => 'required|date',
                'documents' => 'required|in:clear,leasing',
            ]);

            $vehicle = Vehicle::create($request->all());
            return response()->json($vehicle, 201);
        } catch (ValidationException $e) {
            return response()->json([
                'status' => false,
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Vehicle addition failed!',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     * GET /vehicles/{number}
     *
     * @param  string  $number
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($number)
    {
        $vehicle = Vehicle::where('number', $number)->first();

        if (!$vehicle) {
            return response()->json(['error' => 'Vehicle not found'], 404);
        }

        return response()->json($vehicle, 200);
    }

    /**
     * Update the specified resource in storage.
     * PUT /vehicles/{number}
     * use x-www-form-urlencoded for send data
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $number
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $number)
    {
        $request->validate([
            'owner' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:100',
            'insurance_renewal_date' => 'nullable|date',
            'emission_teste_date' => 'nullable|date',
            'revenue_licence_date' => 'nullable|date',
            'documents' => 'nullable|in:clear,leasing',
        ]);

        $vehicle = Vehicle::where('number', $number)->first();

        if (!$vehicle) {
            return response()->json(['error' => 'Vehicle not found'], 404);
        }

        $vehicle->update($request->only([
            'owner', 'phone', 'insurance_renewal_date', 'emission_teste_date', 'revenue_licence_date', 'documents'
        ]));

        return response()->json($vehicle, 200);
    }
    /**
     * Remove the specified resource from storage.
     * DELETE /vehicles/{number}
     *
     * @param  string  $number
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($number)
    {
        $vehicle = Vehicle::where('number', $number)->first();

        if (!$vehicle) {
            return response()->json(['error' => 'Vehicle not found'], 404);
        }

        try {
            $vehicle->delete();

            return response()->json([
                'status' => true,
                'message' => 'Vehicle successfully deleted!',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to delete vehicle.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
