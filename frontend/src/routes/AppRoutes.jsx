import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import EmailVerification from "../auth/EmailVerification";
import Dashboard from "../dashboard/Dashboard";
import DashboardHome from "../dashboard/DashboardHome";
import Employee from "../dashboard/Employee";
import Shop from "../dashboard/Shop";
import Vehicle from "../dashboard/Vehicle";
import Report from "../dashboard/Report";
import Setting from "../dashboard/Setting";
import { getItem, getUser } from "../Util/handleStorage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route
        path="emailverification/:id/:hash"
        element={<EmailVerification />}
      />
      <Route path="login" element={<Login />} />
      <Route path="dashboard/*" element={<Dashboard />}>
        <Route path="home" element={<DashboardHome />} />
        <Route path="employees" element={<Employee />} />
        <Route path="shops" element={<Shop />} />
        <Route path="vehicles" element={<Vehicle />} />
        <Route path="reports" element={<Report />} />
        <Route path="settings" element={<Setting />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
