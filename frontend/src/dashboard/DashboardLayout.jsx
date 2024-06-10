import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function DashboardLayout() {
  return (
    <div className="flex w-screen h-screen">
      <Nav />
      <div className="w-full h-full flex-grow p-2 bg-blue-200">
        <Outlet />
      </div>
    </div>
  );
}
