import React, { useState } from "react";
import Sidebar from "../dashboard/Sidebar";
import Navbar from "../dashboard/Navbar";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen flex relative">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} />
      {/* Overlay (mobile) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-white/30 md:hidden"
        ></div>
      )}

      {/* Main */}
      <main className="flex-1 bg-gray-100 p-3 md:p-4">
        {/* Navbar */}
        <Navbar />
        {/* Page Content */}
        <div className="mt-4">Dashboard Content</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
