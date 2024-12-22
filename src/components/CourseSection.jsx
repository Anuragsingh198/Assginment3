import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import { useDispatch , useSelector} from "react-redux";
import { fetchStudents } from "../redux/studentSlice";

const CourseSection = () => {
  const annualYears = ["AY 2023-24", "AY 2024-25", "AY 2025-26"];
  const cbseClasses = ["CBSE 8", "CBSE 9", "CBSE 10"];
  const { students, status, error } = useSelector((state) => state.student);
  const [selectedYear, setSelectedYear] = useState(annualYears[1]);
  const [selectedClass, setSelectedClass] = useState(cbseClasses[1]);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [showClassDropdown, setShowClassDropdown] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents({ cohort: selectedYear, cbseClass: selectedClass }));
    console.log(students)
  }, [selectedYear, selectedClass, dispatch]);

  return (
    <div className="bg-transparent my-3">
      <div className="firstline flex justify-between items-center px-4">
        <div className="flex justify-between">
          <div className="relative">
            <div
              className="bg-[#E9EDF1] flex justify-center items-center p-2 rounded-md text-[#3F526E] font-bold space-x-1 mr-3 cursor-pointer"
              onClick={() => setShowYearDropdown(!showYearDropdown)}
            >
              {selectedYear}
              <IoMdArrowDropdown className="text-[#3F526E] ml-1 font-bold" />
            </div>
            {showYearDropdown && (
              <div className="absolute bg-white border rounded-md mt-1 shadow-lg">
                {annualYears.map((year) => (
                  <div
                    key={year}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedYear(year);
                      setShowYearDropdown(false);
                    }}
                  >
                    {year}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <div
              className="bg-[#E9EDF1] flex justify-center items-center p-2 rounded-md text-[#3F526E] font-bold space-x-1 cursor-pointer"
              onClick={() => setShowClassDropdown(!showClassDropdown)}
            >
              {selectedClass}
              <IoMdArrowDropdown className="text-[#3F526E] ml-1 font-bold" />
            </div>
            {showClassDropdown && (
              <div className="absolute bg-white border rounded-md mt-1 shadow-lg">
                {cbseClasses.map((cbseClass) => (
                  <div
                    key={cbseClass}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedClass(cbseClass);
                      setShowClassDropdown(false);
                    }}
                  >
                    {cbseClass}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="bg-[#E9EDF1] flex justify-center items-center p-2 rounded-md text-[#3F526E] font-bold space-x-1 cursor-pointer">
            <IoAddOutline className="text-[#3F526E] mr-1 font-bold" />
            Add new student
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
