// AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Index from "../pages/Index";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import EmailVerification from "../auth/EmailVerification";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashboardHome from "../dashboard/DashboardHome";
// employee routes
import EmployeeLayout from "../dashboard/EmployeeLayout";
import Employee from "../dashboard/employee/Employee";
import AddEmployee from "../dashboard/employee/AddEmployee";
import EmployeesLayout from "../dashboard/employee/EmployeesLayout";
import ListEmployees from "../dashboard/employee/ListEmployees";
import EmployeeDetail from "../dashboard/employee/EmployeeDetail";
// shop routes
import ShopLayout from "../dashboard/ShopLayout";
import Shop from "../dashboard/shop/Shop";
import AddShop from "../dashboard/shop/AddShop";
// vehicle routes
import VehicleLayout from "../dashboard/VehicleLayout";
import Vehicle from "../dashboard/vehicle/Vehicle";
import AddVehicle from "../dashboard/vehicle/AddVehicle";
// vehicles list
import VehiclesLayout from "../dashboard/vehicle/VehiclesLayout";
// report routes
import ReportLayout from "../dashboard/ReportLayout";
import Report from "../dashboard/report/Report";
import EmployeeReportLayout from "../dashboard/report/employee/EmployeeReportLayout";
import EmployeeReports from "../dashboard/report/employee/EmployeeReports";
import ListReport from "../dashboard/report/employee/ListReport";
import SalaryReport from "../dashboard/report/employee/SalaryReport";
import AccountReport from "../dashboard/report/employee/AccountReport";
import StatusReport from "../dashboard/report/employee/StatusReport";

import ShopReportLayout from "../dashboard/report/shop/ShopReportLayout";
import ShopReport from "../dashboard/report/shop/ShopReport";
import { ListReport as ShopListReport } from "../dashboard/report/shop/ListReport";
import { StatusReport as ShopStatusReport } from "../dashboard/report/shop/StatusReport";
import { TypeReport as ShopTypeReport } from "../dashboard/report/shop/TypeReport";
import VehicleReportLayout from "../dashboard/report/vehicle/VehicleReportLayout";
import RenewalReport from "../dashboard/report/vehicle/RenewalReport";
import VehicleListReport from "../dashboard/report/vehicle/VehicleListReport";
import DocumentStatusReport from "../dashboard/report/vehicle/DocumentStatusReport";
import VehicleReport from "../dashboard/report/vehicle/VehicleReport";

// setting routes
import SettingLayout from "../dashboard/SettingLayout";
import Setting from "../dashboard/setting/Setting";
// protected route
import ProtectedRoute from "./ProtectedRoute";
import ShopsLyaout from "../dashboard/shop/ShopsLyaout";
import ListShops from "../dashboard/shop/ListShops";
import ShopDetail from "../dashboard/shop/ShopDetail";
import ListVehicles from "../dashboard/vehicle/ListVehicles";
import VehicleDetail from "../dashboard/vehicle/VehicleDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="signup" element={<Signup />} />
      <Route
        path="emailverification/:id/:hash/:expires"
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
        <Route path="employee" element={<EmployeeLayout />}>
          <Route index element={<Employee />} />
          <Route path="add" element={<AddEmployee />} />
          <Route path="employees" element={<EmployeesLayout />}>
            <Route index element={<ListEmployees />} />
            <Route path="view/:id" element={<EmployeeDetail />} />
          </Route>
        </Route>
        <Route path="shop" element={<ShopLayout />}>
          <Route index element={<Shop />} />
          <Route path="add" element={<AddShop />} />
          <Route path="shops" element={<ShopsLyaout />}>
            <Route index element={<ListShops />} />
            <Route path="view/:id" element={<ShopDetail />} />
          </Route>
        </Route>
        <Route path="vehicle" element={<VehicleLayout />}>
          <Route index element={<Vehicle />} />
          <Route path="add" element={<AddVehicle />} />
          <Route path="vehicles" element={<VehiclesLayout />}>
            <Route index element={<ListVehicles />} />
            <Route path="view:number" element={<VehicleDetail />} />
          </Route>
        </Route>
        <Route path="report" element={<ReportLayout />}>
          <Route index element={<Report />} />
          <Route path="employee" element={<EmployeeReportLayout />}>
            <Route index element={<EmployeeReports />} />
            <Route path="ListReport" element={<ListReport />} />
            <Route path="SalaryReport" element={<SalaryReport />} />
            <Route path="StatusReport" element={<StatusReport />} />
            <Route path="AccountReport" element={<AccountReport />} />
          </Route>
          <Route path="shop" element={<ShopReportLayout />}>
            <Route index element={<ShopReport />} />
            <Route path="ListReport" element={<ShopListReport />} />
            <Route path="TypeReport" element={<ShopTypeReport />} />
            <Route path="StatusReport" element={<ShopStatusReport />} />
          </Route>
          <Route path="vehicle" element={<VehicleReportLayout />}>
            <Route index element={<VehicleReport />} />
            <Route path="ListReport" element={<VehicleListReport />} />
            <Route path="RenewalReport" element={<RenewalReport />} />
            <Route
              path="DocumentStatusReport"
              element={<DocumentStatusReport />}
            />
          </Route>
        </Route>
        <Route path="settings" element={<SettingLayout />}>
          <Route index element={<Setting />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
