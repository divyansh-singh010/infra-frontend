

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

function displayQuery(query){
    return (
        <tr>
            <td className="border p-2 text-center">{query.room}</td>
            <td className="border p-2 text-center">{query.issue}</td>
            <td className="border p-2 text-center">NULL</td>
            <td className="border p-2 text-center">{query.complex_name}</td>
            <td className="border p-2 text-center">{query.date}</td>
        </tr>
    )

}