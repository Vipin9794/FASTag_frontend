

import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaHistory,
  FaWallet,
  FaGift,
  FaHeadset,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
      localStorage.removeItem("currentUserEmail");
       localStorage.removeItem("walletBalance");
       localStorage.removeItem("rechargeHistory");
    navigate("/");
    if (closeSidebar) closeSidebar();
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
      isActive ? "bg-blue-500 text-white" : "hover:bg-blue-800 text-white"
    }`;

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full w-64 bg-blue-900 shadow-lg p-4 overflow-y-auto z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:relative
      `}
    >
      <h3 className="text-xl font-bold text-blue-300 mb-6 text-center">
        FASTag Portal
      </h3>

      <nav className="space-y-2">
        <NavLink to="home" className={linkClass} onClick={closeSidebar}>
          <FaHome /> Home
        </NavLink>
        <NavLink
          to="recharge-history"
          className={linkClass}
          onClick={closeSidebar}
        >
          <FaHistory /> Recharge History
        </NavLink>
        <NavLink
          to="wallet-history"
          className={linkClass}
          onClick={closeSidebar}
        >
          <FaWallet /> Wallet History
        </NavLink>
        <NavLink to="offers" className={linkClass} onClick={closeSidebar}>
          <FaGift /> Offers
        </NavLink>
        <NavLink to="support" className={linkClass} onClick={closeSidebar}>
          <FaHeadset /> Help & Support
        </NavLink>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full text-left px-4 py-2 rounded-md hover:bg-red-800 text-red-400 transition-colors"
        >
          <FaSignOutAlt /> Logout
        </button>
        
      </nav>
    </aside>
  );
};

export default Sidebar;


