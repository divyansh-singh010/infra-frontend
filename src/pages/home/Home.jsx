import { useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard";
import List from "../../components/List";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import { DOMAIN } from "../../../domain";

export default function Home() {
    const [queries, setQueries] = useState([])
    useEffect(() => {
        axios.get(`${DOMAIN}queries/`)
            .then((response) => {
                console.log(response.data);
                setQueries(response.data.queries);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="grid grid-cols-10">
            <div className="col-span-2 ">
                <Sidebar />
            </div>
            <div className="col-span-8">
                <Dashboard />
                <div className="shadow-lg p-4 rounded-sm">
                    <div className="text-2xl text-sky-500 font-bold">Welcome User!</div>
                    <List queries={queries}/>
                </div>
            </div>
        </div>
    )
}