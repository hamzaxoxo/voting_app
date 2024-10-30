import React, { useState, memo } from "react";

const PollOption = memo(({ item, isSelected, handleClick }) => (
  <button
    onClick={() => handleClick(item.id)}
    className={`block w-full border-2 rounded-md p-3 transition ${
      isSelected ? "border-indigo-500" : "border-gray-300"
    }`}
    aria-pressed={isSelected}
  >
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <span
          className={`h-5 w-5 border-2 rounded-full mr-2 relative ${
            isSelected ? "border-indigo-500" : "border-gray-300"
          }`}
        >
          {isSelected && (
            <span
              className="h-3 w-3 bg-indigo-500 rounded-full absolute top-1/2 left-1/2 
                 transform -translate-x-1/2 -translate-y-1/2"
            ></span>
          )}
        </span>

        <span className="text-base font-medium">{item.name}</span>
      </div>
    </div>
  </button>
));

export default function Polls() {
  const [selectedVote, setSelectedVote] = useState(null);
  const [message, setMessage] = useState("");

  const voteOptions = [
    { id: 1, name: "HTML" },
    { id: 2, name: "Java" },
    { id: 3, name: "Python" },
    { id: 4, name: "jQuery" },
  ];

  const handleVote = (id) => {
    setSelectedVote(id);
    console.log(`Voted for ${voteOptions.find((item) => item.id === id).name}`);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedVote !== null && message.trim()) {
      const selectedOption = voteOptions.find(
        (item) => item.id === selectedVote
      );
      console.log(`Voted for: ${selectedOption.name}, Message: ${message}`);
      setSelectedVote(null);
      setMessage("");
    } else {
      alert("Please select an option and enter a message.");
    }
  };

  return (
    <div className="mx-auto bg-white rounded-lg p-6 max-w-xl md:w-1/2 w-full">
      <header className="text-xl font-semibold mb-4">Cast your Vote</header>
      <div className="space-y-4">
        {voteOptions.map((item) => (
          <PollOption
            key={item.id}
            item={item}
            isSelected={selectedVote === item.id}
            handleClick={handleVote}
          />
        ))}
      </div>

      {/* Message Text Area */}
      <div className="mt-6">
        <textarea
          value={message}
          onChange={handleMessageChange}
          placeholder="Enter your message"
          className="w-full p-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows="4"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition"
      >
        Submit Vote
      </button>
    </div>
  );
}
