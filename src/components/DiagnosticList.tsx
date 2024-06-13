import React from "react";

interface Diagnostic {
  name: string;
  description: string;
  status: string;
}

interface DiagnosticListProps {
  diagnostics: Diagnostic[];
}

const DiagnosticList: React.FC<DiagnosticListProps> = ({ diagnostics }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Diagnostic List</h2>
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-200 ">
            <tr>
              <th className="py-2 px-4 w-30">Problem/Diagnosis</th>
              <th className="py-2 px-4 w-50">Description</th>
              <th className="py-2 px-4 w-20">Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnostics.map((diagnostic, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{diagnostic.name}</td>
                <td className="py-2 px-4">{diagnostic.description}</td>
                <td className="py-2 px-4">{diagnostic.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
