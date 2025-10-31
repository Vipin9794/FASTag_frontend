


import { useState } from "react";
import { FaBars, FaWallet, FaCheckCircle, FaSpinner } from "react-icons/fa";
import { useUser } from "../context/UserContext";
import { useWallet } from "../context/WalletContext";
import UserProfileModal from "../pages/UserProfileModal";
import logic from "../assets/logic.png"

const Header = ({ toggleSidebar }) => {
  const { user } = useUser();
  const { walletBalance, addTransaction } = useWallet();

  
  const [showModal, setShowModal] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [error, setError] = useState("");

  // 👤 Profile modal state
  const [showProfile, setShowProfile] = useState(false);

  const handleAddMoney = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setPaymentDone(false);
    setCustomAmount("");
    setSelectedAmount(null);
    setError("");
  };

  const handlePayment = () => {
    if (!customAmount || Number(customAmount) <= 0) {
      setError("Please enter a valid amount");
      return;
    }
    setError("");
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setPaymentDone(true);
      addTransaction(customAmount, paymentMethod);
    }, 2000);
  };

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
    setError("");
  };

  return (
    <>
      {/* ------------------  MOBILE HEADER ------------------ */}
      <header className="bg-blue-900 text-white shadow-md flex justify-between items-center px-4 py-3 md:hidden fixed top-0 left-0 right-0 z-50">
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          <FaBars size={22} />
        </button>

        <div className="flex items-center gap-2">
          <img src={logic} alt="Logo" className="h-7" />
         
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleAddMoney}
            className="flex items-center text-white hover:bg-blue-700 px-3 py-1 rounded-lg"
          >
            <FaWallet className="mr-2" /> ₹{walletBalance.toFixed(2)}
          </button>

          {/* <span className="hidden sm:block">{user?.email}</span> */}

          <img
            src={user?.photo || user?.profilePic || "https://i.ibb.co/YXycDLZ/user.png"}
            alt="profile"
            className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
            onClick={() => setShowProfile(true)}
          />
        </div>
      </header>

      {/* ------------------ 💻 DESKTOP HEADER ------------------ */}
      <header className="hidden md:flex bg-blue-900 shadow-md justify-between items-center ml-2 px-6 py-3 fixed top-0 left-64 right-0 z-40 rounded">
        <h1 className="text-md font-semibold text-white">
          FASTag Recharge & Get Exciting Offers
        </h1>

        <div className="flex items-center space-x-4">
          <div className="flex px-3 py-2 rounded-lg text-white font-semibold">
            <FaWallet className="mr-2 mt-1" />₹{walletBalance.toFixed(2)}
          </div>
          <button
            onClick={handleAddMoney}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Money
          </button>

          {/* <span className="hidden sm:block">{user?.email}</span> */}

          <img
            src={user?.photo || user?.profilePic || "https://i.ibb.co/YXycDLZ/user.png"}
            alt="profile"
            className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
            onClick={() => setShowProfile(true)}
          />
        </div>
      </header>

      {/* ------------------  PAYMENT MODAL ------------------ */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/60 z-[999]">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] md:w-[400px] relative animate-fadeIn">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-600 text-xl font-bold hover:text-gray-800"
            >
              ✕
            </button>

            {!paymentDone ? (
              <>
                <h2 className="text-center text-2xl font-semibold mb-6">Add Money</h2>

                <div className="grid grid-cols-4 gap-3 mb-4">
                  {[500, 1000, 1500, 2000].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => handleAmountClick(amt)}
                      className={`border rounded-md py-2 font-semibold transition-all ${
                        selectedAmount === amt
                          ? "bg-blue-600 text-white"
                          : "border-blue-600 text-black hover:bg-blue-50"
                      }`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>

                <div className="text-center mb-3 font-semibold text-gray-500">OR</div>

                <label className="block font-medium mb-1">Enter Amount</label>
                <input
                  type="number"
                  placeholder="Enter Amount"
                  className="w-full border rounded-md p-2 mb-2"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                />

                {error && (
                  <p className="text-red-500 text-sm mb-2 font-medium">{error}</p>
                )}

                <label className="block font-medium mb-1">Payment Method</label>
                <select
                  className="w-full border rounded-md p-2 mb-4"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option>UPI</option>
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                  <option>Net Banking</option>
                </select>

                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className={`w-full py-2 rounded-md font-semibold text-white transition-all ${
                    isProcessing
                      ? "bg-blue-900 cursor-not-allowed"
                      : "bg-blue-900 hover:bg-blue-800"
                  }`}
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <FaSpinner className="animate-spin" /> Please Wait...
                    </span>
                  ) : (
                    "Proceed to Pay"
                  )}
                </button>
              </>
            ) : (
              <div className="text-center py-8">
                <FaCheckCircle className="text-green-600 text-5xl mx-auto mb-3" />
                <h2 className="text-2xl font-bold text-green-700">
                  Payment Successful!
                </h2>
                <p className="text-gray-600 mt-2">
                  ₹{customAmount} added successfully via {paymentMethod}.
                </p>
                <button
                  onClick={handleCloseModal}
                  className="mt-6 bg-blue-900 hover:bg-blue-800 text-white px-5 py-2 rounded-lg"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ------------------  USER PROFILE MODAL ------------------ */}
      <UserProfileModal
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
        userEmail={user?.email}
      />
    </>
  );
};

export default Header;
