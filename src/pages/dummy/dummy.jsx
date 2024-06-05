import Dashboard from "../../components/Dashboard";
import List from "../../components/List";
import Sidebar from "../../components/Sidebar";

export default function Dummy() {
    return (
        <div className="grid grid-cols-10">
            <div className="col-span-2 ">
            <Sidebar />
            </div>
            <div className="col-span-8">
            <Dashboard />
            <div className="shadow-lg p-4 rounded-sm">
                <div className="text-2xl text-sky-500 font-bold">Welcome User!</div>
                <List />
            </div>
            </div>
        </div>
    )
}