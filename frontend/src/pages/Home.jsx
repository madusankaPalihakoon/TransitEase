import React from "react";
import Logo from "../assets/logo/logo-sm.png";

function Home() {
  return (
    <div className="flex w-screen h-screen bg-gray-100 items-center justify-center">
      <div className="flex w-11/12 h-auto p-5 bg-blue-200 flex-wrap rounded-md">
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
          <div>Time</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
