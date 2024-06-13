import React, { useState } from "react";
import { Patient } from "../types/types";

interface PatientsCardProps {
  patients: Patient[];
  onSelect: (patient: Patient) => void;
}

const PatientsCard: React.FC<PatientsCardProps> = ({ patients, onSelect }) => {
  const [search, setSearch] = useState("");

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Patients</h2>
      <input
        type="text"
        placeholder="Search Patients"
        className="mb-4 p-2 border border-gray-300 rounded-lg w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredPatients.map((patient) => (
          <li
            key={patient.name}
            className="flex items-center space-x-4 p-2 cursor-pointer"
            onClick={() => onSelect(patient)}
          >
            <img
              src={patient.profile_picture}
              alt={patient.name}
              className="w-12 h-12 rounded-full"
            />
            <span>{patient.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientsCard;
