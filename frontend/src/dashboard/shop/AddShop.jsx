import { useState } from "react";
import axios from "axios";

const AddShop = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    town: "",
    business: "retail", // default value
    business_status: "active", // default value
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/shops", formData); // Assuming endpoint '/api/shops' for creating shop
      // Handle success, maybe show a success message or redirect
    } catch (error) {
      // Handle error, show error message to the user
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add New Shop</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.email}
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
          <label htmlFor="address" className="block mb-1">
            Address
          </label>
          <input
            type="text"
            name="address"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="town" className="block mb-1">
            Town
          </label>
          <input
            type="text"
            name="town"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.town}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="business" className="block mb-1">
            Business Type
          </label>
          <select
            name="business"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.business}
            onChange={handleChange}
          >
            <option value="retail">Retail</option>
            <option value="wholesale">Wholesale</option>
          </select>
        </div>
        <div>
          <label htmlFor="business_status" className="block mb-1">
            Business Status
          </label>
          <select
            name="business_status"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.business_status}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="close">Close</option>
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

export default AddShop;
