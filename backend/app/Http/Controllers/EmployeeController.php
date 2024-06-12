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
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employees = Employee::all();
        return response()->json($employees);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // This would return a view in a typical Laravel app.
        // return view('employees.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
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
                'name'=>$request->name,
                'employee_id'=> $empId,
                'email'=>$request->email,
                'phone'=>$request->phone,
                'position'=>$request->position,
                'salary' => $request->salary,
                'bank'=>$request->bank,
                'account'=>$request->account,
                'working_status'=>$request->working_status,
                'appointment_date'=>$request->appointment_date,
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
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $employee = Employee::where('employee_id', $request->employee_id)->first();

        if (!$employee) {
            return response()->json(['error' => 'Employee not found'], 404);
        }

        return response()->json($employee);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee $employee)
    {
        // This would return a view in a typical Laravel app.
        // return view('employees.edit', compact('employee'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $employee)
    {
        $request->validate([
            'id' => 'required|exists:employees,id',
            'name' => 'string|max:255',
            'email' => 'email|unique:employees,email,' . $request->id,
            'phone' => 'string|unique:employees,phone,' . $request->id,
            'position' => 'string|max:255',
            'salary' => 'numeric',
            'bank' => 'string|max:255',
            'account' => 'string|max:255',
            'working_status' => 'in:working,retired',
            'appointment_date' => 'date|date'
        ]);

        $employee = Employee::findOrFail($request->id);

        $updateData = [];

        if ($request->has('name')) {
            $updateData['name'] = $request->name;
        }
    
        if ($request->has('email')) {
            $updateData['email'] = $request->email;
        }
    
        if ($request->has('phone')) {
            $updateData['phone'] = $request->phone;
        }
    
        if ($request->has('position')) {
            $updateData['position'] = $request->position;
        }

        if ($request->has('salary')) {
            $updateData['salary'] = $request->salary;
        }

        if ($request->has('bank')) {
            $updateData['bank'] = $request->bank;
        }

        if ($request->has('account')) {
            $updateData['account'] = $request->account;
        }

        if ($request->has('working_status')) {
            $updateData['working_status'] = $request->working_status;
        }

        if ($request->has('appointment_date')) {
            $updateData['appointment_date'] = $request->appointment_date;
        }
    
        $employee->update($updateData);

        return response()->json($employee);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request)
    {
        $request->validate([
            'id' => 'required|exists:employees,id'
        ]);

        try {
            $employee = Employee::findOrFail($request->id);
            $employee->delete();

            return response()->json([
                'status' => true,
                'message' => 'Successfully deleted!'
            ], 200); // 200 OK status code
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to delete employee.'
            ], 500); // 500 Internal Server Error
        }
    }
}
