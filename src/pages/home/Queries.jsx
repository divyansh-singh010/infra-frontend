import React from 'react'
import Dashboard from '../../components/Dashboard'
import List from '../../components/List'
import Sidebar from '../../components/Sidebar'
import { useState } from "react";
import { useEffect } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Queries({queries, isOpen, toggleSidebar}) {
    const [currentPage, setCurrentPage] = useState(1);
    const queriesPerPage = 15;
    const [filteredQueries, setFilteredQueries] = useState(queries);
    const [statusFilter, setStatusFilter] = useState('');
    const [startDateFilter, setStartDateFilter] = useState(null);
    const [endDateFilter, setEndDateFilter] = useState(null);

    useEffect(() => {
        let filteredData = queries;

        if (statusFilter) {
            filteredData = filteredData.filter(query => query.status === statusFilter);
        }

        if (startDateFilter && endDateFilter) {
            filteredData = filteredData.filter(query => {
                const queryDate = new Date(query.date);
                return queryDate >= startDateFilter && queryDate <= new Date(endDateFilter.getTime() + 86400000);
            });
        }

        setFilteredQueries(filteredData);
    }, [queries, statusFilter, startDateFilter, endDateFilter]);

    // Calculate the indices of the first and last queries on the current page
    const indexOfLastQuery = currentPage * queriesPerPage;
    const indexOfFirstQuery = indexOfLastQuery - queriesPerPage;
    const currentQueries = filteredQueries.slice(indexOfFirstQuery, indexOfLastQuery);

    const totalPages = Math.ceil(filteredQueries.length / queriesPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleStatusChange = (e) => {
        setStatusFilter(e.target.value);
    };

    const handleStartDateChange = (date) => {
        setStartDateFilter(date);
    };

    const handleEndDateChange = (date) => {
        setEndDateFilter(date);
    };

    return (
        <div className="flex min-h-screen">
            <div className={`transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
                <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            </div>
            <div className="flex-1 p-6 bg-gray-100">
                <Dashboard />
                <div className="shadow-lg p-4 rounded-sm">
                <div className="flex items-center mb-4">
                        <select value={statusFilter} onChange={handleStatusChange} className="border p-2 mx-2 rounded-md">
                            <option value="">All Status</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                        </select>
                        <div>
                            <label className="mr-2">Start Date:</label>
                            <DatePicker selected={startDateFilter} onChange={handleStartDateChange} className="border p-2 rounded-md" />
                        </div>
                        <div>
                            <label className="mr-2">End Date:</label>
                            <DatePicker selected={endDateFilter} onChange={handleEndDateChange} className="border p-2 rounded-md" />
                        </div>
                    </div>
                    <List queries={currentQueries}/>
                    <div className="flex justify-between mt-4">
                        <button 
                            onClick={handlePreviousPage} 
                            disabled={currentPage === 1}
                            className={`border p-2 mx-2 rounded-md ${currentPage === 1 ? 'bg-gray-300' : 'bg-white'}`}
                        >
                            Previous
                        </button>
                        <button 
                            onClick={handleNextPage} 
                            disabled={currentPage === totalPages}
                            className={`border p-2 mx-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300' : 'bg-white'}`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}