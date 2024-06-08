import { useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard";
import List from "../../components/List";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import { DOMAIN } from "../../../domain";
import { Chart } from "react-google-charts";

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

    // Create frequency mapping for 'room'
const roomFrequency = queries.reduce((acc, query) => {
    acc[query.room] = (acc[query.room] || 0) + 1;
    return acc;
  }, {});
  
  // Convert the frequency mapping to the desired format
  const roomFrequencyList = [["Room", "Frequency"], ...Object.entries(roomFrequency).map(([room, freq]) => [room, freq])];
  const room_options = {
    title: "Room Frequency",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Frequency",
      minValue: 0,
    },
    vAxis: {
      title: "Room",
    },
  };

  const complexFrequency = queries.reduce((acc, query) => {
    acc[query.complex_name] = (acc[query.complex_name] || 0) + 1;
    return acc;
  }, {});
  
  // Convert the frequency mapping to the desired format
  const complexFrequencyList = [["Complexity", "Frequency"], ...Object.entries(complexFrequency).map(([complex_name, freq]) => [complex_name, freq])];
  const complex_options = {
    title: "Complexity Distribution",
    is3D: true,
  };


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
                <div className="shadow-lg p-4 rounded-sm">
                    <Chart
                        width={"100%"}
                        height={"400px"}
                        chartType="BarChart"
                        loader={<div>Loading Chart</div>}
                        data={roomFrequencyList}
                        options={room_options}
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
        </div>
    )
}