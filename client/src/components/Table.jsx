import React from "react";

export default function VoteTable({ data }) {
  return (
    <div className="border rounded-xl mt-10 p-5 max-w-7xl mx-auto flex items-center justify-center">
      <div className="overflow-x-auto w-full min-h-[300px]">
        <table className="bg-white w-full max-w-full">
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Voter Name</th>
              <th className="py-3 px-4 text-left">Vote Time</th>
              <th className="py-3 px-4 text-left">Message</th>
              <th className="py-3 px-4 text-left">Contribution (ETH)</th>
              <th className="py-3 px-4 text-left">Receiver Address</th>
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="border-b border-blue-gray-200">
                  <td className="py-3 px-4">{item.voterName}</td>
                  <td className="py-3 px-4">{item.voteTime}</td>
                  <td className="py-3 px-4">{item.message}</td>
                  <td className="py-3 px-4">
                    <span className="bg-green-200 text-green-700 py-1 px-3 rounded-full text-xs">
                      {item.contribution} ETH
                    </span>
                  </td>
                  <td className="py-3 px-4">{item.receiverAddress}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="font-medium py-20 text-center text-gray-500"
                >
                  <img
                    src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg"
                    alt="No data available"
                    className="mx-auto w-[250px]"
                  />
                  <p className="text-xl pb-20">No Vote Data Found</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
