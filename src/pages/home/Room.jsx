import React from "react";
import Dashboard from "../../components/Dashboard";
import Roomlist from "../../components/Roomlist";
import Sidebar from "../../components/Sidebar";

export default function Room({ roomFrequencyList, isOpen, toggleSidebar}) {
  return (<div className="flex min-h-screen">
  <div className={`transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
  </div>
  <div className="flex-1 p-6 bg-gray-100">
      <Dashboard />
      <div className="shadow-lg p-4 rounded-sm mt-4">
          <Roomlist roomFrequencyList={roomFrequencyList} />
      </div>
  </div>
</div>
);
}