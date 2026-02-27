import React from "react";

const ReminderCard = () => {
  return (
    <div className=" p-6 transition transform hover:scale-105 hover:shadow-xl bg-white rounded-4xl shadow-sm border border-gray-50 font-sans">
      {/* Header */}
      <h3 className="text-gray-900 font-bold text-lg mb-4">Reminders</h3>

      {/* Title */}
      <div className="mb-2">
        <h2 className="text-[#063b28] text-2xl font-bold leading-tight">
          Meeting with Arc Company
        </h2>
      </div>

      {/* Time */}
      <p className="text-gray-400 text-sm mb-6 font-medium">
        Time : 02.00 pm - 04.00 pm
      </p>

      {/* Button */}
      <button className="w-full bg-linear-to-r cursor-pointer from-[#1a4d3a] to-[#2d8a56] hover:opacity-90 text-white py-4 px-6 rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-md">
        {/* <Video size={20} fill="white" className="text-white" /> */}
        <span className="font-semibold text-lg tracking-wide">
          Start Meeting
        </span>
      </button>
    </div>
  );
};

export default ReminderCard;
