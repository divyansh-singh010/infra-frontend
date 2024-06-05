export default function List() {
        return (
            <table className="table-auto w-full">
                    <thead>
                        <tr>
                           <td className="border p-2 text-center">Room</td>
                           <td className="border p-2 text-center">Issue</td>
                           <td className="border p-2 text-center">Status</td>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2 text-center">Room 1</td>
                            <td className="border p-2 text-center">Issue 1</td>
                            <td className="border p-2 text-center">Status 1</td>
                        </tr>
                        <tr>
                            <td className="border p-2 text-center">Room 2</td>
                            <td className="border p-2 text-center">Issue 2</td>
                            <td className="border p-2 text-center">Status 2</td>
                        </tr>
                        <tr>
                            <td className="border p-2 text-center">Room 3</td>
                            <td className="border p-2 text-center">Issue 3</td>
                            <td className="border p-2 text-center">Status 3</td>
                        </tr>
                    </tbody>
                </table>
        )
}
