import React, { useState } from 'react';
import Dashboard from "../../components/Dashboard";
import List from "../../components/List";
import Sidebar from "../../components/Sidebar";

export default function Home() {
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    return (
        <div className="grid grid-cols-10">
            {isSidebarVisible && (
                <div className="col-span-2">
                    <Sidebar onClose={() => setSidebarVisible(false)} />
                </div>
            )}
            <div className={`col-span-${isSidebarVisible ? '8' : '10'}`}>
                <button onClick={() => setSidebarVisible(!isSidebarVisible)}>
                    Toggle Sidebar
                </button>
                <Dashboard />
                <div className="shadow-lg p-4 rounded-sm">
                    <div className="text-2xl text-sky-500 font-bold">Welcome User!</div>
                    <List />
                </div>
            </div>
        </div>
    )
}