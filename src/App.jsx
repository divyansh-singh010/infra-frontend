import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from "axios";
import { DOMAIN } from "../domain"
import Home from './pages/home/Home'
import Token from './pages/token/token'
import Complex from './pages/home/Complex'
import Queries from './pages/home/Queries'
import Issue from './pages/home/Issue'
import Room from './pages/home/Room'
import Login from './pages/login/login'
import { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  const [queries, setQueries] = useState([])
  const [complexFrequencyList, setComplexFrequencyList] = useState([])
  const [issueFrequencyList, setIssueFrequencyList] = useState([])
  const [roomFrequencyList, setRoomFrequencyList] = useState([])
  useEffect(() => {
    axios.get(`${DOMAIN}queries/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      }
    })
      .then((response) => {
        console.log(response.data);
        setQueries(response.data.queries);
        setComplexFrequencyList(response.data.complex_frequency);
        setIssueFrequencyList(response.data.issue_frequency);
        setRoomFrequencyList(response.data.room_frequency);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sortedRoomFrequency = roomFrequencyList.sort((a, b) => b[1] - a[1]);

  const complex_chart_data = [["Complex", "Frequency"], ...complexFrequencyList.map(item => [item.complex_name, item.freq])];

  const issue_chart_data = [["Issue", "Frequency"], ...issueFrequencyList.map(item => [item.issue, item.freq])];

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
  const complex_options = {
    title: "Complex Distribution",
    is3D: true,
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/token' element={<Token />} />
        <Route path="/dashboard" element={<Home isOpen={isOpen} toggleSidebar={toggleSidebar} queries={queries} complexFrequencyList={complex_chart_data} complex_options={complex_options} issueFrequencyList={issue_chart_data} issue_options={issue_options} roomFrequencyList={sortedRoomFrequency} />} />
        <Route path="/complex" element={<Complex isOpen={isOpen} toggleSidebar={toggleSidebar} complexFrequencyList={complex_chart_data} complex_options={complex_options} />} />
        <Route path="/queries" element={<Queries isOpen={isOpen} toggleSidebar={toggleSidebar} queries={queries} />} />
        <Route path="/issue" element={<Issue isOpen={isOpen} toggleSidebar={toggleSidebar} issueFrequencyList={issue_chart_data} issue_options={issue_options} />} />
        <Route path="/room" element={<Room isOpen={isOpen} toggleSidebar={toggleSidebar} roomFrequencyList={sortedRoomFrequency} />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
