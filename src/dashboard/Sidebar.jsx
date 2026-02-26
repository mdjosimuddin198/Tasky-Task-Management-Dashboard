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

const Sidebar = ({ isOpen }) => {
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
      path: "/tasks",
      badge: "12+",
    },
    {
      id: 3,
      label: "Calendar",
      Icon: MdCalendarToday,
      path: "/calendar",
    },
    {
      id: 4,
      label: "Analytics",
      Icon: MdBarChart,
      path: "/analytics",
    },
    {
      id: 5,
      label: "Team",
      Icon: MdPeopleOutline,
      path: "/team",
    },
    {
      id: 6,
      label: "Settings",
      Icon: MdOutlineSettings,
      path: "/settings",
      category: "GENERAL",
    },
    {
      id: 7,
      label: "Help",
      Icon: MdHelpOutline,
      path: "/help",
    },
  ];

  const location = useLocation();
  return (
    <aside
      className={`fixed md:static top-0 left-0 h-full w-64 bg-white p-4 transition-transform duration-300
           ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      <div className="flex items-center gap-1 font-semibold">
        <nav className="space-y-2">
          <div className="flex items-center">
            <MdAddTask className="text-xl" /> <h2 className="text-xl">Tasky</h2>
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
    </aside>
  );
};

export default Sidebar;
