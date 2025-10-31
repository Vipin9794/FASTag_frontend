import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  return (
    <div className="flex h-screen  bg-gray-100">
      {" "}
      {/* Sidebar */}{" "}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />{" "}
      {/* Overlay for mobile view */}{" "}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}{" "}
      {/* Main Content Area */}{" "}
      <div className="flex flex-col flex-1 overflow-hidden">
        {" "}
        <Header toggleSidebar={toggleSidebar} />{" "}
        <main className="flex-1 p-4 mt-15 overflow-y-auto bg-gray-100 ">
          {" "}
          <Outlet />{" "}
        </main>{" "}
      </div>{" "}
    </div>
  );
};
export default DashboardLayout;
