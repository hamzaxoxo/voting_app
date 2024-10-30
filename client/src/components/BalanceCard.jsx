import React, { useState } from "react";
import eth from "../assets/ethereum.png";

export default function BalanceCard(props) {
  const [tooltip, setTooltip] = useState("Copy to clipboard");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(props.account)
      .then(() => setTooltip("Copied!"))
      .catch(() => setTooltip("Failed to copy!"));
    setTimeout(() => setTooltip("Copy to clipboard"), 1500);
  };

  return (
    <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-4">
      <div className="bg-gray-50 text-gray-700 w-full max-w-xl flex flex-col rounded-xl shadow-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img className="w-8 h-8 rounded-lg" src={eth} />
            <div className="text-md font-bold">{props.balance} ETH</div>
            <div className="bg-green-200 text-green-700 py-1 px-3 rounded-full text-xs font-bold">
              {props.balance * 1000} USD
            </div>
          </div>
        </div>
        <div className="mt-4 text-gray-500 font-bold text-sm flex items-center flex-wrap">
          <span className="text-wrap">Address: {props.account}</span>

          <button
            onClick={copyToClipboard}
            className="ml-2 relative group focus:outline-none"
          >
            📋
            <div
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-xs text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {tooltip}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
