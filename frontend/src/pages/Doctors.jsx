import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  // Filter doctors whenever the speciality changes
  useEffect(() => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  }, [speciality, doctors]);

  return (
    <div>
      <p className="text-gray-600">Browse through the Specialist Doctors.</p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Left Side Categories */}
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() => {
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician");
            }}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-6 border border-gray-300 rounded transition-all cursor-pointer 
  ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}
          >
            General Physician
          </p>
          <p
            onClick={() => {
              speciality == "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist");
            }}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-6 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality == "Gynecologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() => {
              speciality == "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist");
            }}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-6 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality == "Dermatologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() => {
              speciality == "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians");
            }}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-6 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality == "Pediatricians" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() => {
              speciality == "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist");
            }}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-6 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality == "Neurologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() => {
              speciality == "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist");
            }}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-6 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality == "Gastroenterologist"
                ? "bg-indigo-100 text-black"
                : ""
            } `}
          >
            Gastroenterologist
          </p>
        </div>

        {/* Doctors List */}
        <div className="grid md:grid-cols-3 gap-6">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              className="border border-blue-200 cursor-pointer rounded-xl overflow-hidden hover:-translate-y-2 transition"
              onClick={() => navigate(`/appointment/${item._id}`)}
            >
              <img src={item.image} alt="" className="bg-blue-50 w-full" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
