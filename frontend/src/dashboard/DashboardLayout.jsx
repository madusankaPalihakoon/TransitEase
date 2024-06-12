import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function DashboardLayout() {
  return (
    <div className="flex w-screen h-screen">
      <Nav />
      <div className="w-full h-full flex bg-white">
        <Outlet />
      </div>
    </div>
  );
}
