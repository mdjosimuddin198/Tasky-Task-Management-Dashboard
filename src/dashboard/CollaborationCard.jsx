import React from "react";

const CollaborationCard = ({ users }) => {
  return (
    <div className=" md:col-span-2 transition transform hover:scale-105 hover:shadow-xl rounded-4xl bg-white p-6 rounded-32 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Team Collaboration</h2>
        <button className="flex items-center gap-1 border border-emerald-900 text-emerald-900 px-2 py-1.5 rounded-full text-sm  hover:bg-emerald-50 transition-colors">
          <span className="text-xl">+</span> Add
        </button>
      </div>

      <div className="space-y-1">
        {users.map((member) => (
          <div key={member.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <h4 className="font-bold text-gray-900 leading-tight">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-400">
                  Joining on{" "}
                  <span className="text-gray-600 font-medium">
                    {member.joinDate}
                  </span>
                </p>
              </div>
            </div>
            <span
              className={`px-3 py-1 rounded-md text-[10px] font-bold border ${member.statusColor}`}
            >
              {member.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationCard;
