import { useState } from "react";
import API from "../config/apiConfig";
import { useNavigate } from "react-router-dom";
import {
  openSuccessNotification,
  openErrorNotification,
  openInfoNotification,
} from "../util/notificationHandler.js";
import { setItem, setUser } from "../util/handleStorage.js";
import { Helmet } from "react-helmet-async";
import { Spin } from "antd";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const redirectToDashboard = () => {
    navigate("/dashboard");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await API.post("/login", formData);
      setLoading(false);
      openSuccessNotification("Login successful");
      setItem("token", response.data.token);
      setUser(response.data.user);
      redirectToDashboard();
    } catch (error) {
      if (error.message === "Email not verified") {
        openInfoNotification(
          "Email not verified",
          "we'll send a verification code to the email address you used to create the account"
        );
        return;
      }
      console.error(error.message);
      openErrorNotification(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>TransitEase - Login</title>
      </Helmet>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
          <Spin spinning={loading} delay={100} tip={"Please Wait"} size="large">
            <h2 className="text-2xl font-bold text-center">Log In</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
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
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Log In
              </button>
            </form>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Login;
