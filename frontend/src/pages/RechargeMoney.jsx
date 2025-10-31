



import React, { useState, useEffect } from "react";
import { FaSpinner, FaCheckCircle } from "react-icons/fa";
import { useRecharge } from "../context/RechargeContext";
import { useUser } from "../context/UserContext";
import { toast } from "react-toastify";

const RechargeMoney = ({ isOpen, onClose, selectedBank, vehicleNo }) => {
  const { user } = useUser();
  const { addRecharge } = useRecharge();

  const [selectedAmount, setSelectedAmount] = useState(500);
  const [paymentMethod, setPaymentMethod] = useState(selectedBank || "Axis Bank");
  const [isPaying, setIsPaying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (user?.lastBank) setPaymentMethod(user.lastBank);
    if (user?.lastAmount) setSelectedAmount(user.lastAmount);
  }, [user]);

  const handlePayment = () => {
    if (!selectedAmount || selectedAmount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    if (!user?.name) {
      toast.warning("Please update your profile before payment");
      return;
    }

    setIsPaying(true);

    setTimeout(() => {
      setIsPaying(false);
      setIsSuccess(true);

      const newRecharge = {
        bank: paymentMethod,
        amount: selectedAmount,
        discount: "0%",
        vehicle: vehicleNo,
      };

      addRecharge(newRecharge);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[90%] max-w-md relative">
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        {!isSuccess ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-5 text-blue-900">Add Money</h2>

            <div className="flex justify-center gap-3 mb-4">
              {[500, 1000, 1500, 2000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setSelectedAmount(amt)}
                  className={`px-4 py-2 rounded-lg border-2 ${
                    selectedAmount === amt
                      ? "bg-blue-900 text-white border-blue-900"
                      : "border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                  }`}
                >
                  ₹{amt}
                </button>
              ))}
            </div>

            <p className="text-center text-gray-500 mb-4">OR</p>

            <input
              type="number"
              value={selectedAmount}
              onChange={(e) => setSelectedAmount(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
              placeholder="Enter Amount"
            />

            <label className="block text-gray-700 font-medium mb-1">Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 mb-5"
            >
              <option>Axis Bank</option>
              <option>SBI Bank</option>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>PNB Bank</option>
            </select>

            <button
              onClick={handlePayment}
              disabled={isPaying}
              className={`w-full py-3 rounded-md text-white font-semibold transition-all ${
                isPaying ? "bg-blue-800 cursor-not-allowed" : "bg-blue-900 hover:bg-[#006d61]"
              }`}
            >
              {isPaying ? (
                <span className="flex items-center justify-center gap-2">
                  <FaSpinner className="animate-spin" /> Processing...
                </span>
              ) : (
                `Pay ₹${selectedAmount}`
              )}
            </button>
          </>
        ) : (
          <div className="text-center py-8">
            <FaCheckCircle className="text-green-600 text-5xl mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-green-700">Payment Successful!</h2>
            <p className="text-gray-600 mt-2">
              ₹{selectedAmount} added successfully via {paymentMethod}.
            </p>
            <button
              onClick={onClose}
              className="mt-6 bg-blue-900 hover:bg-[#006d61] text-white px-5 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RechargeMoney;
