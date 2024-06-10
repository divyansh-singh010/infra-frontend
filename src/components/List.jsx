

export default function List({queries}) {
    return (
        <table className="table-auto w-full">
                <thead>
                    <tr>
                       <td className="border p-2 text-center">Room</td>
                       <td className="border p-2 text-center">Issue</td>
                       <td className="border p-2 text-center">Status</td>
                       <td className="border p-2 text-center">Complex</td>
                       <td className="border p-2 text-center">Date</td>
                    </tr>
                    
                </thead>
                <tbody>
                    {queries.map(query => displayQuery(query))}
                </tbody>
            </table>
    )
}

async function updateStatus(id, status){
    try{
        const response = await fetch("https://infraportal.iitd.ac.in/api/update_status/", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("access_token")}`
            },
            body: JSON.stringify({id: id,
                status: status
            })
        });

        if(response.ok){
            window.location.reload();
        
    }
}catch(error){
    console.log(error);
    alert("An error occurred. Please try again later.");}
}

function displayQuery(query){
    return (
        <tr>
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
    )

}