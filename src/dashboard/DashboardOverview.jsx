import React, { useEffect, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { MdNorthEast, MdArrowDropUp } from "react-icons/md";
import { data } from "react-router-dom";
const DashboardOverview = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://task-api-eight-flax.vercel.app/api/dashboard",
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const dashboardData = await res.json();
        setDatas(dashboardData);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <h2>Loading....</h2>;
  }
  console.log(datas);
  const overviews = [
    { id: 1, lable: "Total Users", revenue: datas.overview.totalUsers },
    { id: 2, lable: "Active Users", revenue: datas.overview.activeUsers },
    { id: 3, lable: "Revenue", revenue: datas.overview.revenue },
    { id: 4, lable: "Growth", revenue: datas.overview.growth },
  ];

  return (
    <>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-[#114d33] font-semibold">Dashboard</h2>
          <p className="text-gray-400">
            Plan ,prioritiz and accomplish your tasks with area
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <button className="flex items-center cursor-pointer bg-linear-to-r from-[#114d33] via-[#1d6b46] to-[#145a3a] text-white px-6 py-2 rounded-2xl gap-3">
            <IoAddCircle className="text-2xl" /> Add Tasks
          </button>
          <button className="flex items-center cursor-pointer outline  text-[#114d33] px-6 py-2 rounded-2xl gap-3">
            Import Data
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-4 ">
        {overviews.map((overview) => (
          <div
            key={overview.id}
            className=" px-4 py-2  rounded-4xl bg-white text-black hover:bg-linear-to-br from-[#1a4d2e] via-[#24633a] to-[#3db55e] hover:text-white shadow-xl relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-medium opacity-90">
                {overview.lable}
              </h3>
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
      </div>
    </>
  );
};

export default DashboardOverview;
