


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoLockClosedOutline } from "react-icons/io5";

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const normalizedEmail = email.trim().toLowerCase();
    const userKey = `user_${normalizedEmail}`;
    const walletKey = `wallet_${normalizedEmail}`;

    if (!localStorage.getItem(userKey)) {
      const userData = {
        name: "Guest User",
        email: normalizedEmail,
        mobile: "",
        profilePic: "https://i.ibb.co/YXycDLZ/user.png",
      };
      localStorage.setItem(userKey, JSON.stringify(userData));
    }

    if (!localStorage.getItem(walletKey)) {
      const walletData = { balance: 0, history: [] };
      localStorage.setItem(walletKey, JSON.stringify(walletData));
    }

    localStorage.setItem("currentUserEmail", normalizedEmail);
    localStorage.setItem("token", "userLoggedIn");

    // Wait and refresh
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return (
    <>
      {/* ✅ Login Modal */}
      <div className="fixed inset-0 bg-black/60 bg-opacity-50 z-50 flex justify-center items-center">
        <div className="bg-white rounded-2xl shadow-2xl w-[90%] sm:w-[400px] p-8 relative animate-fadeIn">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
          >
            ✕
          </button>

          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 w-full rounded-lg p-2 focus:ring-2 focus:ring-blue-900 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white w-full py-2 rounded-lg font-medium disabled:opacity-70"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="flex items-start space-x-2 mt-3">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                className="w-5 h-5 accent-blue-900 rounded"
              />
              <label className="text-sm text-gray-700">
                Keep me posted about sales and offers
              </label>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              By proceeding, I accept the{" "}
              <a href="#" className="text-blue-600 underline">
                T&C
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 underline">
                Privacy Policy
              </a>
            </p>

            <div className="flex justify-center items-center mt-4 text-xs text-gray-500">
              <IoLockClosedOutline className="mt-[2px] mr-1" />
              Secured by <span className="font-semibold ml-1">Logiclead</span>
            </div>
          </form>
        </div>
      </div>

      {/* ✅ Loading Overlay (on top of dashboard, not full screen color) */}
      {loading && (
        <div className="fixed inset-0 bg-black/60 flex flex-col items-center justify-center z-[60]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-900 mb-4"></div>
          <p className="text-lg font-semibold text-black">
             please wait...
          </p>
        </div>
      )}
    </>
  );
}
