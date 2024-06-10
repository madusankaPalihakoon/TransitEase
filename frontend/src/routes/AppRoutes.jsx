import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Index from "../pages/Index";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import EmailVerification from "../auth/EmailVerification";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashboardHome from "../dashboard/DashboardHome";
import Employee from "../dashboard/Employee";
import Shop from "../dashboard/Shop";
import Vehicle from "../dashboard/Vehicle";
import Report from "../dashboard/Report";
import Setting from "../dashboard/Setting";

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
      <Route path="dashboard/*" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="employees" element={<Employee />} />
        <Route path="shops" element={<Shop />} />
        <Route path="vehicles" element={<Vehicle />} />
        <Route path="reports" element={<Report />} />
        <Route path="settings" element={<Setting />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
