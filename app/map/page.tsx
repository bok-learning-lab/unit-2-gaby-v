"use client";

import { useState } from "react";
import { Map } from "@/components/map";
import { sampleStudents, Student } from "@/lib/sample-students";

export default function MapPage() {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [filteredStudents, setFilteredStudents] = useState(sampleStudents);

  const handlePinClick = (student: Student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="w-full h-full flex">
      {/* Map */}
      <div className="flex-1 h-full">
        <Map students={filteredStudents} onPinClick={handlePinClick} />
      </div>

      {/* Profile Card */}
      {selectedStudent && (
        <div className="w-96 bg-white shadow-lg p-6 overflow-y-auto">
          <button
            onClick={() => setSelectedStudent(null)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>

          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold">{selectedStudent.name}</h2>
              <p className="text-gray-600">{selectedStudent.hometown}</p>
            </div>

            <div className="space-y-2 text-sm">
              <div>
                <span className="font-semibold">Class Year:</span>{" "}
                {selectedStudent.classYear}
              </div>
              <div>
                <span className="font-semibold">Concentration:</span>{" "}
                {selectedStudent.concentration}
              </div>
              <div>
                <span className="font-semibold">Dorm:</span>{" "}
                {selectedStudent.dorm}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Fun Facts</h3>
              <ul className="space-y-1 text-sm">
                {selectedStudent.funFacts.map((fact, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span>•</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
