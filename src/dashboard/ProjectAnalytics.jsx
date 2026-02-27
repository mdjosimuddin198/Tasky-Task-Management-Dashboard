import React from "react";

const ProjectAnalytics = ({ analytics }) => {
  const hatchedStyle = {
    backgroundImage: `repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 2px, transparent 2px, transparent 10px)`,
    border: "1px solid #e5e7eb",
  };
  return (
    <div className=" p-6 bg-white md:col-span-2 rounded-3xl shadow-sm font-sans border border-gray-100">
      <h2 className="text-xl font-semibold mb-10 text-gray-800">
        Project Analytics
      </h2>

      <div className="flex items-end justify-between h-40 px-2">
        {analytics.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            {/* Bar Container */}
            <div className="relative w-10 sm:w-12 group">
              {/* Tooltip (Only for Tuesday/T as per image) */}

              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white border border-gray-200 px-2 py-1 rounded text-[10px] text-gray-400 shadow-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full border border-green-400"></span>
                {item.conversions}%
              </div>

              {/* The Bar */}
              <div
                className={`w-full rounded-full ${index % 2 === 0 ? "bg-green-300" : ""} transition-all duration-500 ease-in-out `}
                style={{
                  height: `${item.conversions * 4}px`, // ডাটা অনুযায়ী হাইট
                  ...(!item.isActive ? hatchedStyle : {}),
                }}
              >
                {/* Tooltip point icon */}
              </div>
            </div>

            {/* Day Label */}
            <span className="mt-4 text-sm text-gray-400 font-medium">
              {item.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectAnalytics;
