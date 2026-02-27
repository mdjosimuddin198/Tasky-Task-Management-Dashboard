import React, { useState, useEffect } from "react";
import { BiPause, BiPlay, BiPlus, BiSquare } from "react-icons/bi";

const ProjectTimeTrackerCard = ({ products }) => {
  // Time Tracker State
  const [seconds, setSeconds] = useState(0); // শুরু করার জন্য একটি ডিফল্ট সময় (01:24:08)
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  // সেকেন্ডকে HH:MM:SS ফরম্যাটে রূপান্তর
  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col gap-6 lg:row-span-2 font-sans">
      {/* Project List Card */}
      <div className="bg-white transition transform hover:scale-105 hover:shadow-xl p-6 rounded-4xl  shadow-sm border border-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Project</h2>
          <button className="flex items-center gap-1 border border-emerald-900 text-emerald-900 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-50 transition-colors">
            <BiPlus size={16} /> New
          </button>
        </div>

        <div className="space-y-5">
          {products.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div>
                <h4 className="text-[15px] font-semibold text-gray-800 leading-tight">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Price : ${item.price} <span>Sales: {item.sales}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Functional Time Tracker Card */}
      <div className="relative overflow-hidden transition transform hover:scale-105 hover:shadow-xl bg-[#0a3622] p-6 rounded-4xl flex flex-col justify-between">
        {/* Background Decorative Rings (SVG style) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-20 border-emerald-400 rounded-full blur-2xl"></div>
        </div>

        <h3 className="text-white text-xl font-medium relative z-10">
          Time Tracker
        </h3>

        <div className="text-center relative z-10">
          <h1 className="text-white text-3xl font-bold tracking-widest">
            {formatTime(seconds)}
          </h1>
        </div>

        <div className="flex justify-center gap-4 relative z-10">
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsActive(!isActive)}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#0a3622] hover:scale-105 transition-transform"
          >
            {isActive ? (
              <BiPause size={28} fill="currentColor" />
            ) : (
              <BiPlay size={28} fill="currentColor" className="ml-1" />
            )}
          </button>

          {/* Stop Button */}
          <button
            onClick={() => {
              setIsActive(false);
              setSeconds(0);
            }}
            className="w-14 h-14 bg-[#d32f2f] rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform"
          >
            <BiSquare size={24} fill="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeTrackerCard;
