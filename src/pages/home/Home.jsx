import { Link } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import List from "../../components/List";
import Roomlist from "../../components/Roomlist";
import Sidebar from "../../components/Sidebar";
import { Chart } from "react-google-charts";

export default function Home({ isOpen, toggleSidebar, issueFrequencyList, issue_options, complexFrequencyList, complex_options, roomFrequencyList, queries }) {
    return (
        <div className="flex min-h-screen">
            <div className={`transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
                <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            </div>
            <div className="flex-1 p-6 bg-gray-100">
                <Dashboard />
                <div className="grid grid-cols-2 gap-4">
                    <div className="shadow-lg p-4 rounded-sm">
                        <Chart
                            width={"100%"}
                            height={"400px"}
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={issueFrequencyList}
                            options={issue_options}
                        />
                    </div>
                    <div className="shadow-lg p-4 rounded-sm">
                        <Chart
                            width={"100%"}
                            height={"400px"}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={complexFrequencyList}
                            options={complex_options}
                        />
                    </div>
                </div>
                <div className="shadow-lg p-4 rounded-sm mt-4">
                <div className="text-2xl text-sky-500 font-bold">Room Rankings</div>
                    <Roomlist roomFrequencyList={roomFrequencyList.slice(0,10)} />
                    <Link to="/room" className="text-blue-500">View More...</Link>
                </div>
                <div className="shadow-lg p-4 rounded-sm mt-4">
                    <div className="text-2xl text-sky-500 font-bold">Queries</div>
                    <List queries={queries.slice(0,10)} />
                    <Link to="/queries" className="text-blue-500">View More...</Link>
                </div>
            </div>
        </div>
    );
}
