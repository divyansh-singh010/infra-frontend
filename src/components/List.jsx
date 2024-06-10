import axios from "axios";

export default function List({ queries }) {
    return (
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <td className="border p-2 text-center">Room</td>
                    <td className="border p-2 text-center">Issue</td>
                    <td className="border p-2 text-center">Status</td>
                    <td className="border p-2 text-center">Complex</td>
                    <td className="border p-2 text-center">Date</td>
                    <td className="border p-2 text-center">
                        <button
                            onClick={async () => {
                                try {
                                    const res = await axios.get("https://infraportal.iitd.ac.in/api/download/", {
                                        headers: {
                                            Authorization: `Bearer ${localStorage.getItem("access_token")}`
                                        },
                                        responseType: 'blob' // Set the responseType to 'blob' to receive binary data
                                    });

                                    // Create a blob object from the response data
                                    const blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

                                    // Create a download link element
                                    const downloadLink = document.createElement('a');
                                    downloadLink.href = window.URL.createObjectURL(blob);
                                    downloadLink.setAttribute('download', 'queries.xlsx'); // Set the file name

                                    // Append the download link to the body and click it programmatically
                                    document.body.appendChild(downloadLink);
                                    downloadLink.click();

                                    // Remove the download link from the body
                                    document.body.removeChild(downloadLink);
                                } catch (error) {
                                    console.error('Error downloading file:', error);
                                }
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="70" viewBox="0 0 48 48">
                                <path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path>
                                <path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path>
                                <path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path>
                                <path fill="#17472a" d="M14 24.005H29V33.055H14z"></path>
                                <g>
                                    <path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path>
                                    <path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path>
                                    <path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path>
                                    <path fill="#129652" d="M29 24.005H44V33.055H29z"></path>
                                </g>
                                <path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path>
                                <path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path>
                            </svg>
                        </button>
                    </td>
                </tr>
            </thead>
            <tbody>
                {queries.map((query) => displayQuery(query))}
            </tbody>
        </table>
    );
}

async function updateStatus(id, status) {
    try {
        console.log(`Updating status for ID: ${id} to status: ${status}`);
        const response = await axios.put("https://infraportal.iitd.ac.in/api/update_status/", {
            id: id,
            status: status
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("access_token")}`
            }
        });

        if (response.status === 200) {
            alert("Status updated successfully.");
            window.location.reload();
        }
    } catch (error) {
        console.log('Error:', error);
        alert("An error occurred. Please try again later.");
    }
}

function displayQuery(query) {
    return (
        <tr key={query.id}>
            <td className="border p-2 text-center">{query.room}</td>
            <td className="border p-2 text-center">{query.issue}</td>
            <td className="border p-2 text-center">{query.status}</td>
            <td className="border p-2 text-center">{query.complex_name}</td>
            <td className="border p-2 text-center">{query.date}</td>
            <td className="border p-2 text-center">
                <button
                    onClick={() => updateStatus(query.id, query.status)}
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-300"
                >
                    Update Status
                </button>
            </td>
        </tr>
    );
}
