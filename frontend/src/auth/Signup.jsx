import { useState } from "react";
import API from "../config/apiConfig";
import {
  openErrorNotification,
  openSuccessNotification,
} from "../util/notificationHandler.js";
import { logErrors } from "../util/errorHandler.js";
import { setItem } from "../util/handleStorage.js";
import { Helmet } from "react-helmet-async";
import { Spin } from "antd";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nic: "",
    password: "",
    password_confirmation: "",
  });

  const { name, email, password, password_confirmation } = formData;

  const handleChange = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== password_confirmation) {
      openErrorNotification("Password and confirmation do not match");
      setLoading(false);
      return;
    }
    try {
      const response = await API.post("/register/", formData);
      openSuccessNotification(response.data.message);
      setLoading(false);
      setItem("token", response.data.token);
    } catch (error) {
      logErrors(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>TransitEase - Signup</title>
      </Helmet>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Spin spinning={loading} delay={100} tip={"Please Wait"} size="large">
          <div className="w-full max-w-lg p-8 space-y-2 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  value={password_confirmation}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </form>
            <div className="w-full grid justify-center">
              <span>
                If you alrady have an account please login{" "}
                <a className=" text-blue-700 font-semibold" href="login">
                  here
                </a>
              </span>
            </div>
          </div>
        </Spin>
      </div>
    </>
  );
};

export default Signup;
