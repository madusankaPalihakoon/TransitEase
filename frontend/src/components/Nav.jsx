import { NavLink } from "react-router-dom";
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

export default function Nav() {
  return (
    <div className="flex flex-col h-screen bg-gray-50 w-20 justify-center gap-6">
      <NavLink
        className="text-black hover:scale-105 transition ease-in delay-125 p-1 rounded-md text-xl font-bold w-full h-fit flex justify-center"
        to="/dashboard"
      >
        <HomeIcon className="h-10 w-10" />
      </NavLink>
      <NavLink
        className="text-black hover:scale-105 transition ease-in delay-125 p-1 rounded-md text-xl font-bold w-full h-fit flex justify-center"
        to="/dashboard/employee"
      >
        <UsersIcon className="h-10 w-10" />
      </NavLink>
      <NavLink
        className="text-black hover:scale-105 transition ease-in delay-125 p-1 rounded-md text-xl font-bold w-full h-fit flex justify-center"
        to="/dashboard/shop"
      >
        <BuildingStorefrontIcon className="h-10 w-10" />
      </NavLink>
      <NavLink
        className="text-black hover:scale-105 transition ease-in delay-125 p-1 rounded-md text-xl font-bold w-full h-fit flex justify-center"
        to="/dashboard/vehicle"
      >
        <TruckIcon className="h-10 w-10" />
      </NavLink>
      <NavLink
        className="text-black hover:scale-105 transition ease-in delay-125 p-1 rounded-md text-xl font-bold w-full h-fit flex justify-center"
        to="/dashboard/report"
      >
        <BookOpenIcon className="h-10 w-10" />
      </NavLink>
      <NavLink
        className="text-black hover:scale-105 transition ease-in delay-125 p-1 rounded-md text-xl font-bold w-full h-fit flex justify-center"
        to="/dashboard/settings"
      >
        <AdjustmentsHorizontalIcon className="h-10 w-10" />
      </NavLink>
      <div className="flex mt-10 gap-2 flex-wrap">
        <a
          className="text-black hover:scale-105 transition ease-in delay-125 p-1 rounded-md text-xl font-bold w-full h-fit flex justify-center"
          href="/logout"
        >
          <ArrowLeftStartOnRectangleIcon className="h-10 w-10" />
        </a>
        <a
          className="text-black hover:scale-105 transition ease-in delay-125 p-1 rounded-md text-xl font-bold w-full h-fit flex justify-center"
          href="/profile"
        >
          <UserCircleIcon className="h-10 w-10" />
        </a>
      </div>
    </div>
  );
}
