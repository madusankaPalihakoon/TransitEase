// ListVehicles.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListVehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get("/api/vehicles"); // Assuming endpoint '/api/vehicles' to get all vehicles
        setVehicles(response.data);
      } catch (error) {
        console.error("There was an error fetching the vehicles!", error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Vehicles List</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Number</th>
            <th className="py-2 px-4 border-b">Owner</th>
            <th className="py-2 px-4 border-b">Insurance Renewal Date</th>
            <th className="py-2 px-4 border-b">Emission Test Date</th>
            <th className="py-2 px-4 border-b">Revenue License Date</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.number}>
              <td className="py-2 px-4 border-b">
                <Link
                  to={`/vehicle/${vehicle.number}`}
                  className="text-blue-500 hover:underline"
                >
                  {vehicle.number}
                </Link>
              </td>
              <td className="py-2 px-4 border-b">{vehicle.owner}</td>
              <td className="py-2 px-4 border-b">
                {vehicle.insurance_renewal_date}
              </td>
              <td className="py-2 px-4 border-b">
                {vehicle.emission_test_date}
              </td>
              <td className="py-2 px-4 border-b">
                {vehicle.revenue_license_date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListVehicles;
