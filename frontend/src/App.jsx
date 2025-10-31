

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { UserProvider } from "./context/UserContext";
import { WalletProvider } from "./context/WalletContext";
import { RechargeProvider } from "./context/RechargeContext";

import Dashboard from "./layouts/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import RechargeHistory from "./pages/RechargeHistory";
import WalletHistory from "./pages/WalletHistory";
import Offers from "./pages/Offers";
import Support from "./pages/Support";
import Login from "./pages/Login";

function AppRoutes() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const path = window.location.pathname;

    if (token && (path === "/" || path === "/home" || path === "/login")) {
      navigate("/dashboard/home");
    }

    if (!token && path.startsWith("/dashboard")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="recharge-history" element={<RechargeHistory />} />
          <Route path="wallet-history" element={<WalletHistory />} />
          <Route path="offers" element={<Offers />} />
          <Route path="support" element={<Support />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <ToastContainer position="top-center"  autoClose={3000} />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <UserProvider>
        <WalletProvider>
          <RechargeProvider>
            <AppRoutes />
          </RechargeProvider>
        </WalletProvider>
      </UserProvider>
    </Router>
  );
}
