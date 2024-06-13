import React from "react";

import DownloadIcon from "../assets/DownloadIcon.svg";

interface LabResultsProps {
  results: string[];
}

const LabResults: React.FC<LabResultsProps> = ({ results }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Lab Results</h2>
      <ul className="flex flex-col">
        {results.map((result, index) => (
          <div className="flex flex-row items-center justify-between">
            <li key={index} className="p-2">
              {result}
            </li>
            <button>
              <img className="w-4 h-4" src={DownloadIcon} />
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default LabResults;
