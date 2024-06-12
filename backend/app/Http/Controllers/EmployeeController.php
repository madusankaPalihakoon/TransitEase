<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $employees = Employee::all();
        return response()->json($employees);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'nic' => 'required|string|max:255',
                'email' => 'required|email|unique:employees',
                'phone' => 'required|string|unique:employees',
                'position' => 'required|string|max:255',
                'salary' => 'required|numeric',
                'bank' => 'required|string|max:255',
                'account' => 'required|string|max:255',
                'working_status' => 'required|in:working,retired',
                'appointment_date' => 'required|date'
            ]);

            $empId = Employee::generateEmployeeId();

            $employee = Employee::create([
                'name' => $request->name,
                'employee_id' => $empId,
                'email' => $request->email,
                'nic' => $request->nic,
                'phone' => $request->phone,
                'position' => $request->position,
                'salary' => $request->salary,
                'bank' => $request->bank,
                'account' => $request->account,
                'working_status' => $request->working_status,
                'appointment_date' => $request->appointment_date,
            ]);
            return response()->json($employee, 201);
        } catch (ValidationException $e) {
            return response()->json([
                'status' => false,
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Registration Failed!',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($employee_id)
    {
        $employee = Employee::where('employee_id',  $employee_id)->first();

        if (!$employee) {
            return response()->json(['error' => 'Employee not found'], 404);
        }

        return response()->json($employee);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $employee_id)
    {
        $request->validate([
            'name' => 'string|max:255',
            'email' => 'email|unique:employees,email,' . $employee_id,
            'phone' => 'string|unique:employees,phone,' . $employee_id,
            'position' => 'string|max:255',
            'salary' => 'numeric',
            'bank' => 'string|max:255',
            'account' => 'string|max:255',
            'working_status' => 'in:working,retired',
            'appointment_date' => 'date|date'
        ]);

        $employee = Employee::findOrFail($employee_id);

        $updateData = $request->only([
            'name', 'email', 'phone', 'position', 'salary', 'bank', 'account', 'working_status', 'appointment_date'
        ]);

        $employee->update($updateData);

        return response()->json($employee);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(Request $request, $employee_id)
    {
        $request->validate([
            'employee_id' => 'required|exists:employees,employee_id'
        ]);

        try {
            $employee = Employee::findOrFail($request->$employee_id);
            $employee->delete();

            return response()->json([
                'status' => true,
                'message' => 'Successfully deleted!'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to delete employee.'
            ], 500);
        }
    }
}
