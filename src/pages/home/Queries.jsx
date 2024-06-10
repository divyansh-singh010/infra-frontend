import React from 'react'
import Dashboard from '../../components/Dashboard'
import List from '../../components/List'
import Sidebar from '../../components/Sidebar'
import { useState } from "react";

export default function Queries({queries, isOpen, toggleSidebar}) {
    const [currentPage, setCurrentPage] = useState(1);
    const queriesPerPage = 15;

    // Calculate the indices of the first and last queries on the current page
    const indexOfLastQuery = currentPage * queriesPerPage;
    const indexOfFirstQuery = indexOfLastQuery - queriesPerPage;
    const currentQueries = queries.slice(indexOfFirstQuery, indexOfLastQuery);

    const totalPages = Math.ceil(queries.length / queriesPerPage);

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

    return (
        <div className="flex min-h-screen">
            <div className={`transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
                <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            </div>
            <div className="flex-1 p-6 bg-gray-100">
                <Dashboard />
                <div className="shadow-lg p-4 rounded-sm">
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