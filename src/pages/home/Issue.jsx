import React from "react";
import Dashboard from "../../components/Dashboard";
import Sidebar from "../../components/Sidebar";
import { Chart } from "react-google-charts";

export default function Issue({ issueFrequencyList, issue_options, isOpen, toggleSidebar}) {
  return (<div className="flex min-h-screen">
  <div className={`transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
  </div>
  <div className="flex-1 p-6 bg-gray-100">
      <Dashboard />
      <div className="shadow-lg p-4 rounded-sm mt-4">
      <Chart
                            width={"100%"}
                            height={"400px"}
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={issueFrequencyList}
                            options={issue_options}
                        />
      </div>
  </div>
</div>
);
}