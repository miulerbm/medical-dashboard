import React from "react";

import DoctorProfile from "../assets/doctor.png";
import TestLogo from "../assets/TestLogo.svg";
import Home from "../assets/Home.svg";
import PatientsIcon from "../assets/PatientsIcon.svg";
import ScheduleIcon from "../assets/ScheduleIcon.svg";
import MessageIcon from "../assets/MessageIcon.svg";
import TransactionsIcon from "../assets/TransactionsIcon.svg";
import SettingsIcon from "../assets/SettingsIcon.svg";

const NavButton = ({ title, icon, isActive }: any) => {
  return (
    <button
      className={`flex items-center p-2 space-x-2 ${
        isActive ? "bg-[#01F0D0] rounded-full" : ""
      }`}
    >
      <img src={icon} />
      <span>{title}</span>
    </button>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-evenly items-center rounded-full bg-white">
      <div className="flex items-center">
        <img className="h-20 mr-2" src={TestLogo} />
        <span className="text-white font-bold text-xl">Logo</span>
      </div>
      <div className="flex space-x-4">
        <NavButton title="Overview" icon={Home} />
        <NavButton title="Patients" icon={PatientsIcon} isActive />
        <NavButton title="Schedule" icon={ScheduleIcon} />
        <NavButton title="Message" icon={MessageIcon} />
        <NavButton title="Transactions" icon={TransactionsIcon} />
      </div>
      <div className="flex items-center space-x-4 p-4">
        <div className="flex items-center space-x-2 p-2 border-r">
          <img
            src={DoctorProfile}
            alt="Doctor"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p>Dr. Jose Simmons</p>
            <p className="text-sm">General Practitioner</p>
          </div>
        </div>
        <button>
          <img className="w-6 h-6" src={SettingsIcon} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
