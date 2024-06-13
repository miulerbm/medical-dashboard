import { useState, useEffect } from "react";
import { Patient } from "../types/types";

export const useFetchPatients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            headers: {
              Authorization: "Basic " + btoa("coalition:skills-test"),
            },
          }
        );
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        setError("Failed to fetch patients");
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  return { patients, loading, error };
};
