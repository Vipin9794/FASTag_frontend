



import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import vhical from "../assets/vhical.png";
import RechargeMoney from "./RechargeMoney";
import { useUser } from "../context/UserContext";
import { toast } from "react-toastify";

export default function FastagRecharge({ selectedBank, onEdit }) {
  const { user, updateUser } = useUser();
  const [vehicleNumber, setVehicleNumber] = useState(user?.vehicle || "");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleNext = () => {
    if (!vehicleNumber.trim()) {
        toast.warning(" Please enter your vehicle registration number!");
      return;
    }

    // ✅ Save vehicle in user profile
    updateUser({ vehicle: vehicleNumber });

    // ✅ Open Recharge Popup
    setIsPopupOpen(true);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-lg p-8 md:p-12 mt-10 max-w-5xl mx-auto">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-6">Recharge your FASTag</h2>

          <div className="flex items-center justify-between border rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-3">
              <img
                src={selectedBank.img}
                alt={selectedBank.name}
                className="w-10 h-10 rounded-full"
              />
              <p className="font-medium">{selectedBank.name}</p>
            </div>
            <button
              onClick={onEdit}
              className="text-red-500 text-sm flex items-center gap-1 font-medium"
            >
              <FaEdit /> EDIT
            </button>
          </div>

          <input
            type="text"
            placeholder="Vehicle Registration Number"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            className="border border-gray-300 rounded-lg w-full py-2 px-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleNext}
            className="bg-blue-900 hover:bg-blue-800 text-white w-full py-2 rounded-lg font-semibold"
          >
            NEXT
          </button>
        </div>

        <div className="hidden md:flex md:w-1/2 h-full justify-center">
          <img src={vhical} alt="FASTag Illustration" className="w-80" />
        </div>
      </div>

      <RechargeMoney
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        selectedBank={selectedBank.name}
        vehicleNo={vehicleNumber}
      />
    </>
  );
}

