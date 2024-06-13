import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PatientsCard from "../components/PatientsCard";
import DiagnosisHistory from "../components/DiagnosisHistory";
import PatientDetail from "../components/PatientDetail";
import DiagnosticList from "../components/DiagnosticList";
import LabResults from "../components/LabResults";
import { useFetchPatients } from "../hooks/useFetchPatients";
import { Patient } from "../types/types";

const Dashboard: React.FC = () => {
  const { patients, loading, error } = useFetchPatients();
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  useEffect(() => {
    if (patients.length > 0) {
      setSelectedPatient(patients[0]);
    }
  }, [patients]);

  const handleSelectPatient = (patient: Patient) => {
    setSelectedPatient(patient);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Navbar />

      <div className="grid p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 h-screen overflow-y-auto">
            <PatientsCard patients={patients} onSelect={handleSelectPatient} />
          </div>

          <div className="col-span-2">
            <div className="h-full flex flex-col">
              {selectedPatient && (
                <DiagnosisHistory patient={selectedPatient} />
              )}
              <div className="mt-10 flex-1 overflow-y-auto">
                <DiagnosticList
                  diagnostics={
                    selectedPatient ? selectedPatient.diagnostic_list : []
                  }
                />
              </div>
            </div>
          </div>

          <div className="col-span-1 h-full overflow-y-auto">
            {selectedPatient && <PatientDetail patient={selectedPatient} />}
            <div className="mt-10 flex-1 overflow-y-auto">
              <LabResults
                results={selectedPatient ? selectedPatient.lab_results : []}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
