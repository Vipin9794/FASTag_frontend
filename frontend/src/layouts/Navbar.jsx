

import React, { useState } from "react";
import { FaBars, FaTimes, FaWallet } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import logic from "../assets/logic.png"
import logicLogo from "../assets/logiclogo.png"
import Login from "../pages/Login"; // ✅ Import modal

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // ✅ new state

  return (
    <>
      <nav className="bg-blue-900 shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-40">
        <img src={logic} alt="" className="w-24 h-8" />

        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => setShowLogin(true)} className="text-white p-3 rounded-lg hover:cursor-pointer transition">
            <FaWallet className="text-2xl" />
          </button>
          <button
            onClick={() => setShowLogin(true)} // ✅ open modal
            className=" text-white text-3xl  px-5 py-2 rounded-lg hover:cursor-pointer  curser-pointer transition"
          >
           <FaUserCircle/>
          </button>
        </div>

        <button
          className="md:hidden text-white text-3xl"
         onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
            <div className="bg-white w-full sm:w-80 h-full p-6 flex flex-col items-start shadow-2xl animate-slideIn">
              <div className="flex justify-between items-center w-full mb-8">
                <img src={logicLogo} alt="" className="w-24 h-8 " />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 text-2xl"
                >
                  <FaTimes />
                </button>
              </div>

              <button
                onClick={() => {
                  setShowLogin(true);
                  setIsOpen(false);
                }}
                className=" flex w-full bg-blue-50 text-black  px-5 py-3 rounded-lg mb-4 text-left hover:bg-blue-700 transition"
              >
                <FaUserCircle className="mt-1 text-2xl space-x-3 mr-3"/>Login/Signup
              </button>

              <button
                onClick={() =>{setShowLogin(true);
                  setIsOpen(false);}}
                className=" flex w-full bg-blue-50 text-black px-5 py-3 rounded-lg text-left hover:bg-green-700 transition"
              >
               <FaWallet className="mt-1 text-2xl space-x-3 mr-3" /> Wallet
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ✅ Modal call here */}
      <Login isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
}

