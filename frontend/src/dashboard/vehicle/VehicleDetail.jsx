// VehicleDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VehicleDetail = () => {
  const { number } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await axios.get(`/api/vehicles/${number}`); // Assuming endpoint '/api/vehicles/:number' to get vehicle details
        setVehicle(response.data);
      } catch (error) {
        console.error(
          "There was an error fetching the vehicle details!",
          error
        );
      }
    };

    fetchVehicle();
  }, [number]);

  if (!vehicle) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Vehicle Details</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p>
          <strong>Number:</strong> {vehicle.number}
        </p>
        <p>
          <strong>Owner:</strong> {vehicle.owner}
        </p>
        <p>
          <strong>Phone:</strong> {vehicle.phone}
        </p>
        <p>
          <strong>Insurance Renewal Date:</strong>{" "}
          {vehicle.insurance_renewal_date}
        </p>
        <p>
          <strong>Emission Test Date:</strong> {vehicle.emission_test_date}
        </p>
        <p>
          <strong>Revenue License Date:</strong> {vehicle.revenue_license_date}
        </p>
        <p>
          <strong>Documents:</strong> {vehicle.documents}
        </p>
      </div>
    </div>
  );
};

export default VehicleDetail;
