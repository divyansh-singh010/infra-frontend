import React from 'react';

export default function Roomlist({ roomFrequencyList }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Room</th>
                        <th className="py-2 px-4 border-b">Frequency</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {roomFrequencyList.map(([room, freq], index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b">{room}</td>
                            <td className="py-2 px-4 border-b">{freq}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
