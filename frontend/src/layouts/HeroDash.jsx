
import React, { useState } from "react";
import Login from "../pages/Login";
import bbps from "../assets/bbps.png"

const HeroDash = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="relative w-full px-6 md:px-12 py-14 flex flex-col md:flex-row justify-between items-center bg-blue-30">
      {/* Left Section */}
      <div className="flex-1 space-y-6 ml-3">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
            FASTag Recharge
          </h1>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
            Online at Logiclead
          </h1>
        </div>

        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>Multiple Payment Options</li>
          <li>Exciting Discounts & Offers for FASTag</li>
          <li>24×7 Customer Support</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center mt-3">
        <div className="w-full max-w-md bg-white border shadow-xl rounded-xl overflow-hidden">
          <div className=" flex bg-blue-900 text-white text-center py-5 space-x-25">
            <h2 className=" ml-3 text-xl font-semibold">FASTag Recharge</h2>
            <img src={bbps} alt="" className="w-20 h-8 text-center" />
          </div>

          <div className="p-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Vehicle Number"
              className="border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              onClick={() => {
                setShowLogin(true);
              }}
              className="bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-all duration-300"
            >
              Recharge Now
            </button>
          </div>
        </div>
      </div>

      <Login isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
};

export default HeroDash;
