import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("/api/employees"); // Assuming endpoint '/api/employees' to get all employees
        setEmployees(response.data);
      } catch (error) {
        console.error("There was an error fetching the employees!", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Employees List</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">NIC</th>
            <th className="py-2 px-4 border-b">Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="py-2 px-4 border-b">{employee.name}</td>
              <td className="py-2 px-4 border-b">{employee.nic}</td>
              <td className="py-2 px-4 border-b">
                <Link
                  to={`/employee/${employee.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {employee.id}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployees;
