import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`/api/employees/${id}`); // Assuming endpoint '/api/employees/:id' to get employee details
        setEmployee(response.data);
      } catch (error) {
        console.error(
          "There was an error fetching the employee details!",
          error
        );
      }
    };

    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Employee Details</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p>
          <strong>Name:</strong> {employee.name}
        </p>
        <p>
          <strong>NIC:</strong> {employee.nic}
        </p>
        <p>
          <strong>Email:</strong> {employee.email}
        </p>
        <p>
          <strong>Phone:</strong> {employee.phone}
        </p>
        <p>
          <strong>Position:</strong> {employee.position}
        </p>
        <p>
          <strong>Salary:</strong> {employee.salary}
        </p>
        <p>
          <strong>Bank:</strong> {employee.bank}
        </p>
        <p>
          <strong>Account:</strong> {employee.account}
        </p>
        <p>
          <strong>Working Status:</strong> {employee.working_status}
        </p>
      </div>
    </div>
  );
};

export default EmployeeDetail;
