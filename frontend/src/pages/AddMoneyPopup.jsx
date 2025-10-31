import React, { useState } from "react";
import { FaRupeeSign, FaSpinner, FaCheckCircle } from "react-icons/fa";

const AddMoneyPopup = ({ isOpen, onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [isPaying, setIsPaying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = () => {
    setIsPaying(true);
    setTimeout(() => {
      setIsPaying(false);
      setIsSuccess(true);
    }, 2000); // simulate 2 sec payment
  };

  const amounts = [500, 1000, 1500, 2000];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[90%] max-w-md relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        {!isSuccess ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-5">Add Money</h2>

            {/* Amount Buttons */}
            <div className="flex justify-center gap-3 mb-4">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setSelectedAmount(amt)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all ${
                    selectedAmount === amt
                      ? "bg-blue-900 text-white border-blue-50"
                      : "border-blue-900 text-white hover:bg-blue-900"
                  }`}
                >
                  ₹{amt}
                </button>
              ))}
            </div>

            <p className="text-center text-gray-500 mb-4">OR</p>

            {/* Manual Amount Input */}
            <input
              type="number"
              value={selectedAmount}
              onChange={(e) => setSelectedAmount(e.target.value)}
              className="w-full border rounded-md p-2 mb-4"
              placeholder="Enter Amount"
            />

            {/* Payment Method */}
            <label className="block text-gray-700 font-medium mb-1">
              Payment Method
            </label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full border rounded-md p-2 mb-5"
            >
              <option>UPI</option>
              <option>Debit Card</option>
              <option>Credit Card</option>
              <option>Net Banking</option>
            </select>

            {/* Payment Button */}
            <button
              onClick={handlePayment}
              disabled={isPaying}
              className={`w-full py-3 rounded-md text-white font-semibold transition-all ${
                isPaying
                  ? "bg-green-700 cursor-not-allowed"
                  : "bg-green-800 hover:bg-green-900"
              }`}
            >
              {isPaying ? (
                <span className="flex items-center justify-center gap-2">
                  <FaSpinner className="animate-spin" /> Please Wait..
                </span>
              ) : (
                `Pay ₹${selectedAmount}`
              )}
            </button>
          </>
        ) : (
          // ✅ Success message
          <div className="text-center py-8">
            <FaCheckCircle className="text-green-600 text-5xl mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-green-700">
              Payment Successful!
            </h2>
            <p className="text-gray-600 mt-2">
              ₹{selectedAmount} added successfully via {paymentMethod}.
            </p>
            <button
              onClick={onClose}
              className="mt-6 bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddMoneyPopup;
