// AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Index from "../pages/Index";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import EmailVerification from "../auth/EmailVerification";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashboardHome from "../dashboard/DashboardHome";
import Employee from "../dashboard/employee/Employee";
import AddEmployee from "../dashboard/employee/AddEmployee";
import Shop from "../dashboard/Shop";
import Vehicle from "../dashboard/Vehicle";
import Report from "../dashboard/Report";
import Setting from "../dashboard/Setting";
import ProtectedRoute from "./ProtectedRoute";
import EmployeeLayout from "../dashboard/EmployeeLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="signup" element={<Signup />} />
      <Route
        path="emailverification/:id/:hash"
        element={<EmailVerification />}
      />
      <Route path="login" element={<Login />} />
      <Route
        path="dashboard/*"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="employees" element={<EmployeeLayout />}>
          <Route index element={<Employee />} />
          <Route path="add" element={<AddEmployee />} />
        </Route>
        <Route path="shops" element={<Shop />} />
        <Route path="vehicles" element={<Vehicle />} />
        <Route path="reports" element={<Report />} />
        <Route path="settings" element={<Setting />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
