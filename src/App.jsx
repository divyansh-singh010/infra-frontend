import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from "axios";
import { DOMAIN } from "../domain"
import Home from './pages/home/Home'
import Dummy from './pages/dummy/dummy'
import Complex from './pages/home/Complex'
import Queries from './pages/home/Queries'
import Issue from './pages/home/Issue'
import Room from './pages/home/Room'
import Login from './pages/login/Login'
import { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true)
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
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
  const sortedRoomFrequency = Object.entries(roomFrequency).sort((a, b) => b[1] - a[1]);

  const issueFrequency = queries.reduce((acc, query) => {
    acc[query.issue] = (acc[query.issue] || 0) + 1;
    return acc;
  }, {});
  
  // Convert the frequency mapping to the desired format
  const issueFrequencyList = [["Issue", "Frequency"], ...Object.entries(issueFrequency).map(([issue, freq]) => [issue, freq])];
  const issue_options = {
    title: "Issue Frequency",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Frequency",
      minValue: 0,
    },
    vAxis: {
      title: "Issue",
    },
  };

  const complexFrequency = queries.reduce((acc, query) => {
    acc[query.complex_name] = (acc[query.complex_name] || 0) + 1;
    return acc;
  }, {});
  
  // Convert the frequency mapping to the desired format
  const complexFrequencyList = [["Complex", "Frequency"], ...Object.entries(complexFrequency).map(([complex_name, freq]) => [complex_name, freq])];
  const complex_options = {
    title: "Complex Distribution",
    is3D: true,
  };
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/" element={<Home isOpen={isOpen} toggleSidebar={toggleSidebar} queries={queries} complexFrequencyList={complexFrequencyList} complex_options={complex_options} issueFrequencyList={issueFrequencyList} issue_options={issue_options} roomFrequencyList={sortedRoomFrequency} />} />
      <Route path="/dummy" elemnt={<Dummy isOpen={isOpen} toggleSidebar={toggleSidebar}/>} />
      <Route path="/complex" element={<Complex isOpen={isOpen} toggleSidebar={toggleSidebar} complexFrequencyList={complexFrequencyList} complex_options={complex_options} />} />
       <Route path="/queries" element={<Queries isOpen={isOpen} toggleSidebar={toggleSidebar} queries={queries}/>} />
      <Route path="/issue" element={<Issue isOpen={isOpen} toggleSidebar={toggleSidebar} issueFrequencyList={issueFrequencyList} issue_options={issue_options}/>} />
      <Route path="/room" element={<Room isOpen={isOpen} toggleSidebar={toggleSidebar} roomFrequencyList={sortedRoomFrequency}/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
