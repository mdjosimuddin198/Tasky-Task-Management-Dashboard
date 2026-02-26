import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { LuCommand } from "react-icons/lu";
import { MdEmail, MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white rounded-xl px-3 md:px-6 py-3 shadow-md">
      {/* Menu Button */}
      <MdMenu
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl md:hidden cursor-pointer"
      />

      {/* Search */}
      <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg w-full max-w-xs md:max-w-md mx-2">
        <FaSearch />
        <input
          type="text"
          placeholder="Search task"
          className="bg-transparent outline-none text-sm w-full"
        />
        <span className="hidden md:flex items-center gap-1 bg-white px-2 py-1 rounded text-xs text-gray-500">
          <LuCommand /> F
        </span>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 md:gap-4">
        <button className="bg-gray-100 p-2 rounded-full hidden md:block">
          <MdEmail />
        </button>
        <button className="bg-gray-100 p-2 rounded-full hidden md:block">
          <FaBell />
        </button>

        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
