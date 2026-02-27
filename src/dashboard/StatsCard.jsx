import React from "react";
import { MdNorthEast, MdArrowDropUp } from "react-icons/md";

const StatsCard = ({ overviews }) => {
  return (
    <>
      {overviews.map((overview) => (
        <div
          key={overview.id}
          className=" px-4 py-2  transition-all transform hover:scale-105 hover:shadow-xl  rounded-4xl bg-white text-black hover:bg-linear-to-br from-[#1a4d2e] via-[#24633a] to-[#3db55e] hover:text-white shadow-xl relative overflow-hidden"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-medium opacity-90">{overview.lable}</h3>
            <div className="bg-white p-2 rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform">
              <MdNorthEast className="text-black text-xl" />
            </div>
          </div>

          <h1 className="text-7xl font-bold mb-6 tracking-tighter">
            {overview.revenue}
          </h1>

          <div className="flex items-center gap-2 ">
            <div className="flex items-center bg-white/20 border border-white/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
              <span className="text-[12px] font-bold">5</span>
              <MdArrowDropUp className="text-xl text-yellow-400" />
            </div>
            <p className="text-sm font-light opacity-80">
              Increased from last month
            </p>
          </div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-400/20 blur-3xl rounded-full"></div>
        </div>
      ))}
    </>
  );
};

export default StatsCard;
