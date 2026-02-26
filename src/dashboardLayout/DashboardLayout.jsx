import React, { useState } from "react";
import Sidebar from "../dashboard/Sidebar";
import Navbar from "../dashboard/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen flex relative">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} />
      {/* Main */}
      <main className="flex-1 bg-gray-100 p-3 md:p-4">
        {/* Navbar */}
        <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
        {/* Page Content */}
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
