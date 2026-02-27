import React, { useState } from "react";
import { MdAddTask } from "react-icons/md";
import {
  MdDashboard,
  MdTaskAlt,
  MdCalendarToday,
  MdBarChart,
  MdPeopleOutline,
  MdOutlineSettings,
  MdHelpOutline,
  MdLogout,
} from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavLink from "../components/NavLink";
import { RxCross2 } from "react-icons/rx";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear(token);
    toast.success("logout success");
    navigate("/");
  };

  const navItems = [
    {
      id: 1,
      label: "Dashboard",
      Icon: MdDashboard,
      path: "/dashboard",
    },
    {
      id: 2,
      label: "Tasks",
      Icon: MdTaskAlt,
      path: "/dashboard/tasks",
      badge: "12+",
    },
    {
      id: 3,
      label: "Calendar",
      Icon: MdCalendarToday,
      path: "/dashboard/calendar",
    },
    {
      id: 4,
      label: "Analytics",
      Icon: MdBarChart,
      path: "/dashboard/analytics",
    },
    {
      id: 5,
      label: "Team",
      Icon: MdPeopleOutline,
      path: "/dashboard/team",
    },
    {
      id: 6,
      label: "Settings",
      Icon: MdOutlineSettings,
      path: "/dashboard/settings",
      category: "GENERAL",
    },
    {
      id: 7,
      label: "Help",
      Icon: MdHelpOutline,
      path: "/dashboard/help",
    },
  ];

  const location = useLocation();
  return (
    <aside
      className={`fixed md:static top-0 left-0 z-50 h-full w-64 bg-white p-4 transition-transform duration-300
           ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      <div className="flex items-center gap-1 font-semibold">
        <nav className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <MdAddTask className="text-xl" />{" "}
              <h2 className="text-xl">Tasky</h2>
            </div>
            <RxCross2
              className="text-2xl mt-0.5 md:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <h2 className="font-semibold text-xs  text-gray-400 mt-8 mb-4 tracking-widest">
            Menu
          </h2>
          {navItems.map((item) => (
            <NavLink key={item.id} item={item} />
          ))}
          <button
            onClick={handleLogOut}
            className="flex items-center cursor-pointer bg-linear-to-r from-[#114d33] via-[#1d6b46] to-[#145a3a] text-white px-6 py-2 rounded-2xl gap-3"
          >
            <MdLogout />
            Log Out
          </button>
        </nav>
      </div>
      <div className="bg-[url(https://i.pinimg.com/1200x/70/41/e9/7041e95d55782f2d9c62b97f0f95e6cf.jpg)] bg-center text-white p-4  rounded-2xl relative md:top-46 overflow-hidden bg-no-repeat">
        <div className="relative z-10">
          <p className="text-xl font-bold leading-tight">
            Download Our Mobile App
          </p>
          <p className="text-xs opacity-70 mt-1 italic">
            Get easy in another way
          </p>
        </div>
        <button className="flex items-center cursor-pointer mt-4 bg-linear-to-r from-[#114d33] via-[#1d6b46] to-[#145a3a] text-white px-6 py-2 rounded-2xl gap-3">
          Download App
        </button>
        {/* ব্যাকগ্রাউন্ড শেপ সিমুলেশন */}
        <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-emerald-800 rounded-full blur-xl opacity-50"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
