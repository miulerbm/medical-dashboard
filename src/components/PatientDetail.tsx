import React, { useState } from "react";
import { Patient } from "../types/types";
import PhoneIcon from "../assets/PhoneIcon.svg";
import BirthIcon from "../assets/BirthIcon.svg";
import MaleIcon from "../assets/MaleIcon.svg";
import FemaleIcon from "../assets/FemaleIcon.svg";
import InsuranceIcon from "../assets/InsuranceIcon.svg";

interface PatientDetailProps {
  patient: Patient;
}

const PatientField = ({ label, value, icon }: any) => {
  return (
    <div className="flex items-center mb-2">
      <img src={icon} alt={label} className="w-10 h-10 mr-2" />
      <div>
        <p className="font-semibold">{label}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

const PatientDetail: React.FC<PatientDetailProps> = ({ patient }) => {
  const [showAllInfo, setShowAllInfo] = useState(false);

  const handleShowAllInfo = () => {
    setShowAllInfo(!showAllInfo);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <img
        src={patient.profile_picture}
        alt={patient.name}
        className="w-40 h-40 rounded-full mx-auto mb-4"
      />
      <h2 className="text-center text-xl font-bold mb-2">{patient.name}</h2>

      <div className="flex flex-col gap-4">
        <PatientField
          label="Date of Birth"
          value={patient.date_of_birth}
          icon={BirthIcon}
        />
        <PatientField
          label="Gender"
          icon={patient.gender === "Male" ? MaleIcon : FemaleIcon}
          value={patient.gender}
        />
        <PatientField
          label="Contact Info"
          value={patient.phone_number}
          icon={PhoneIcon}
        />
        <PatientField
          label="Emergency Contacts"
          value={patient.emergency_contact}
          icon={PhoneIcon}
        />
        <PatientField
          label="Insurance Provider"
          value={patient.insurance_type}
          icon={InsuranceIcon}
        />

        <div className="text-center mb-4">
          <button
            className="bg-[#01F0D0] px-4 py-2 rounded-full"
            onClick={handleShowAllInfo}
          >
            {showAllInfo ? "Hide Other Data" : "Show All Information"}
          </button>
        </div>

        {showAllInfo && <></>}
      </div>
    </div>
  );
};

export default PatientDetail;
