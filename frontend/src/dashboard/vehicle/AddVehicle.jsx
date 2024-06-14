import { useState } from "react";
import axios from "axios";

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    number: "",
    owner: "",
    phone: "",
    insurance_renewal_date: "",
    emission_test_date: "",
    revenue_license_date: "",
    documents: "clear", // default value
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/vehicles", formData); // Assuming endpoint '/api/vehicles' for creating vehicle
      // Handle success, maybe show a success message or redirect
    } catch (error) {
      // Handle error, show error message to the user
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add New Vehicle</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="number" className="block mb-1">
            Number
          </label>
          <input
            type="text"
            name="number"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="owner" className="block mb-1">
            Owner
          </label>
          <input
            type="text"
            name="owner"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.owner}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="insurance_renewal_date" className="block mb-1">
            Insurance Renewal Date
          </label>
          <input
            type="date"
            name="insurance_renewal_date"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.insurance_renewal_date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="emission_test_date" className="block mb-1">
            Emission Test Date
          </label>
          <input
            type="date"
            name="emission_test_date"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.emission_test_date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="revenue_license_date" className="block mb-1">
            Revenue License Date
          </label>
          <input
            type="date"
            name="revenue_license_date"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.revenue_license_date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="documents" className="block mb-1">
            Documents
          </label>
          <select
            name="documents"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.documents}
            onChange={handleChange}
          >
            <option value="clear">Clear</option>
            <option value="leasing">Leasing</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVehicle;
