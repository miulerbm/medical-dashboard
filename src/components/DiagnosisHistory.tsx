import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Patient } from "../types/types";

import ArrowUp from "../assets/ArrowUp.svg";
import ArrowDown from "../assets/ArrowDown.svg";
import RespiratoryRateIcon from "../assets/respiratory_rate.svg";
import TemperatureIcon from "../assets/temperature.svg";
import HeartBPMIcon from "../assets/HeartBPM.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface DiagnosisHistoryProps {
  patient: Patient;
}

const PressureItem = ({ type, value, levels }: any) => {
  return (
    <div className="flex flex-col items-center mb-4 p-2 rounded">
      <div className="flex flex-row self-start">
        <div
          className="flex self-center items-center"
          style={{ color: type === "Systolic" ? "#E66FD2" : "#8C6FE6" }}
        >
          &#x25cf;
        </div>
        <h4 className="font-bold ml-2 self-center">{type}</h4>
      </div>
      <p className="text-lg font-bold self-start">{value}</p>
      <div className="flex flex-row self-start gap-2">
        {levels.includes("Normal") ? (
          <></>
        ) : (
          <img
            src={levels.includes("Higher") ? ArrowUp : ArrowDown}
            alt="Arrow"
            className="w-4 h-4 self-center"
          />
        )}

        <p>{levels}</p>
      </div>
    </div>
  );
};

const MeasureItem = ({
  title,
  value,
  levels,
  icon,
  bgColor,
  valueUnit,
}: any) => {
  return (
    <div
      className={`flex flex-col w-full p-8 gap-4 rounded-lg bg-[${bgColor}]`}
    >
      <div>
        <img src={icon} alt={title} className="w-20 h-20 mr-4" />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xl font-bold">
          {value} {valueUnit}
        </p>
        <p className="">{levels}</p>
      </div>
    </div>
  );
};

const DiagnosisHistory: React.FC<DiagnosisHistoryProps> = ({ patient }) => {
  const bloodPressureData = {
    labels: patient.diagnosis_history.map(
      (history) => `${history.month} ${history.year}`
    ),
    datasets: [
      {
        label: "Systolic",
        data: patient.diagnosis_history.map(
          (history) => history.blood_pressure.systolic.value
        ),
        borderColor: "#E66FD2",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Diastolic",
        data: patient.diagnosis_history.map(
          (history) => history.blood_pressure.diastolic.value
        ),
        borderColor: "#8C6FE6",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        ticks: {
          stepSize: 20,
        },
        grid: {
          borderDash: [5, 5],
          color: "rgba(200, 200, 200, 0.8)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Diagnosis History</h2>
      <div className="flex flex-col gap-10">
        <div className="p-4 bg-[#F4F0FE] rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Blood Pressure</h3>
          <div className="flex flex-row justify-between gap-10">
            <div className="flex w-2/3 items-center justify-center">
              <Line data={bloodPressureData} options={options} />
            </div>
            <div className="w-1/3 p-4">
              <PressureItem
                type={"Systolic"}
                value={
                  patient.diagnosis_history[0].blood_pressure.systolic.value
                }
                levels={
                  patient.diagnosis_history[0].blood_pressure.systolic.levels
                }
              />
              <PressureItem
                type={"Diastolic"}
                value={
                  patient.diagnosis_history[0].blood_pressure.diastolic.value
                }
                levels={
                  patient.diagnosis_history[0].blood_pressure.diastolic.levels
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-between flex-row gap-4">
          <MeasureItem
            title="Respiratory Rate"
            icon={RespiratoryRateIcon}
            value={patient.diagnosis_history[0].respiratory_rate.value}
            levels={patient.diagnosis_history[0].respiratory_rate.levels}
            valueUnit="bpm"
            bgColor="#E0F3FA"
          />
          <MeasureItem
            title="Temperature"
            icon={TemperatureIcon}
            value={patient.diagnosis_history[0].temperature.value}
            levels={patient.diagnosis_history[0].temperature.levels}
            valueUnit="°F"
            bgColor="#E0F3FA"
          />
          <MeasureItem
            title="Heart Rate"
            icon={HeartBPMIcon}
            value={patient.diagnosis_history[0].heart_rate.value}
            levels={patient.diagnosis_history[0].heart_rate.levels}
            valueUnit="bpm"
            bgColor="#E0F3FA"
          />
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
