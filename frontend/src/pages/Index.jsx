import { useState, useEffect } from "react";
import Logo from "../assets/logo/logo-sm.png";
import ClockIcon from "../assets/icon/clock.svg";
import CalenderIcon from "../assets/icon/calendar.svg";

export default function Index() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <div className="flex w-screen h-screen bg-gray-100 items-center justify-center">
      <div className="flex w-4/5 h-auto p-5 bg-blue-200 flex-wrap rounded-md">
        <div className="w-60 h-fit mx-auto flex justify-center py-4">
          <img
            className="w-full h-auto object-cover bg-green-300 rounded-md"
            src={Logo}
            alt=""
            srcSet=""
          />
        </div>
        <div className="w-full flex justify-center gap-10 py-4">
          <a
            className="px-4 py-2 text-xl font-semibold text-blue-50 bg-blue-600 min-w-28 text-nowrap text-center rounded-lg hover:bg-blue-700"
            href="/login"
          >
            Login
          </a>
          <a
            className="px-4 py-2 text-xl font-semibold text-blue-50 bg-blue-600 min-w-28 text-nowrap text-center rounded-lg hover:bg-blue-700"
            href="/signup"
          >
            Signup
          </a>
        </div>
        <div className="w-full h-auto flex justify-center py-5 items-center">
          <div className=" inline-flex w-full justify-center gap-2">
            <img src={CalenderIcon} alt="" />
            <p>
              {" "}
              {dateState.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            <img src={ClockIcon} alt="" />
            <p>
              {dateState.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
