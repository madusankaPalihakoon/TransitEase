import { Routes, Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import DashboardHome from "../dashboard/DashboardHome";
import Employee from "../dashboard/Employee";
import Shop from "../dashboard/Shop";
import Vehicle from "../dashboard/Vehicle";
import Report from "../dashboard/Report";
import Setting from "../dashboard/Setting";

const ProtectedRoutes = () => {
  return (
    <Route path="dashboard/*" element={<Dashboard />}>
      <Route path="home" element={<DashboardHome />} />
      <Route path="employees" element={<Employee />} />
      <Route path="shops" element={<Shop />} />
      <Route path="vehicles" element={<Vehicle />} />
      <Route path="reports" element={<Report />} />
      <Route path="settings" element={<Setting />} />
    </Route>
  );
};

export default ProtectedRoutes;
