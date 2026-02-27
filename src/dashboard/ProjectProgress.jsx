import React from "react";

const ProjectProgress = () => {
  const completed = 41;
  const inProgress = 30;
  const pending = 29;

  const radius = 90;
  const stroke = 20;
  const normalizedRadius = radius - stroke / 2;
  const circumference = Math.PI * normalizedRadius;

  const completedLen = (completed / 100) * circumference;
  const progressLen = (inProgress / 100) * circumference;
  const pendingLen = (pending / 100) * circumference;
  return (
    <div className="bg-gray-100 transition transform hover:scale-105 hover:shadow-xl md:col-span-2 lg:col-span-1 p-6 rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-4">Project Progress</h2>

      <div className="flex justify-center items-center relative">
        <svg height={radius + 40} width={radius * 2 + 40}>
          {/* Completed */}
          <path
            d={`M20 ${radius + 20} A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${radius * 2 + 20} ${radius + 20}`}
            fill="transparent"
            stroke="#16a34a"
            strokeWidth={stroke}
            strokeDasharray={`${completedLen} ${circumference}`}
            strokeLinecap="round"
          />

          {/* In Progress */}
          <path
            d={`M20 ${radius + 20} A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${radius * 2 + 20} ${radius + 20}`}
            fill="transparent"
            stroke="#14532d"
            strokeWidth={stroke}
            strokeDasharray={`${progressLen} ${circumference}`}
            strokeDashoffset={-completedLen}
            strokeLinecap="round"
          />

          {/* Pending */}
          <path
            d={`M20 ${radius + 20} A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${radius * 2 + 20} ${radius + 20}`}
            fill="transparent"
            stroke="#9ca3af"
            strokeWidth={stroke}
            strokeDasharray={`${pendingLen} ${circumference}`}
            strokeDashoffset={-(completedLen + progressLen)}
          />
        </svg>

        <div className="absolute text-center">
          <h1 className="text-3xl font-bold">{completed}%</h1>
          <p className="text-sm text-green-700">Project Ended</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;
