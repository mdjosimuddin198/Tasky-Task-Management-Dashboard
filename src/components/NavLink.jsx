import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ item }) => {
  return (
    <div>
      {item.category && (
        <h2 className="text-xs font-semibold text-gray-400 mt-8 mb-4 tracking-widest">
          {item.category}
        </h2>
      )}

      <div
        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${item.label === "Dashboard" ? " border-l-4 border-green-400" : "text-gray-500 hover:bg-gray-100"}`}
      >
        <Link className="flex items-center gap-3">
          <item.Icon
            className={`text-2xl ${item.label === "Dashboard" ? "text-green-400" : ""}`}
          />
          <span className="text-sm font-medium">{item.label}</span>
        </Link>

        {item.badge && (
          <span className="bg-[#114d33] text-white text-[10px] px-2 py-0.5 rounded-md">
            {item.badge}
          </span>
        )}
      </div>
    </div>
  );
};

export default NavLink;
