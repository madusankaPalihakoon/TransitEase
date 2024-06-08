import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  HomeIcon,
  UsersIcon,
  BuildingStorefrontIcon,
  TruckIcon,
  BookOpenIcon,
  AdjustmentsHorizontalIcon,
  ArrowLeftStartOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import AppRoutes from "../routes/AppRoutes";

function Dashboard() {
  return (
    <div className="flex w-screen h-screen">
      <div className="flex flex-col h-screen bg-gray-50 w-20 justify-center gap-6">
        <Link
          className="text-black hover:scale-105 transition ease-in delay-125 p-1 rounded-md text-xl font-bold w-full h-fit flex justify-center"
          to="/dashboard/home"
        >
          <HomeIcon className="h-10 w-10" />
        </Link>
        <Link
          className="text-black hover:scale-105 transition ease-in delay-125 p-1 rounded-md text-xl font-bold w-full h-fit flex justify-center"
          to="/dashboard/employees"
        >
          <UsersIcon className="h-10 w-10" />
        </Link>
        <Link
          className="text-black hover:scale-105 transition ease-in delay-125 p-1 rounded-md text-xl font-bold w-full h-fit flex justify-center"
          to="/dashboard/shops"
        >
          <BuildingStorefrontIcon className="h-10 w-10" />
        </Link>
        <Link
          className="text-black hover:scale-105 transition ease-in delay-125 p-1 rounded-md text-xl font-bold w-full h-fit flex justify-center"
          to="/dashboard/vehicles"
        >
          <TruckIcon className="h-10 w-10" />
        </Link>
        <Link
          className="text-black hover:scale-105 transition ease-in delay-125 p-1 rounded-md text-xl font-bold w-full h-fit flex justify-center"
          to="/dashboard/reports"
        >
          <BookOpenIcon className="h-10 w-10" />
        </Link>
        <Link
          className="text-black hover:scale-105 transition ease-in delay-125 p-1 rounded-md text-xl font-bold w-full h-fit flex justify-center"
          to="/dashboard/settings"
        >
          <AdjustmentsHorizontalIcon className="h-10 w-10" />
        </Link>
        <div className="flex mt-10 gap-2 flex-wrap">
          <a
            className="text-black hover:scale-105 transition ease-in delay-125 p-1 rounded-md text-xl font-bold w-full h-fit flex justify-center"
            href=""
          >
            <ArrowLeftStartOnRectangleIcon className="h-10 w-10" />
          </a>
          <a
            className="text-black hover:scale-105 transition ease-in delay-125 p-1 rounded-md text-xl font-bold w-full h-fit flex justify-center"
            href=""
          >
            <UserCircleIcon className="h-10 w-10" />
          </a>
        </div>
      </div>
      <div className="w-full h-full flex-grow p-2 bg-blue-200">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
