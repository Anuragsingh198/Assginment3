import React from "react";
import { useSelector } from "react-redux";

const Table = () => {
  const { students, status, error } = useSelector((state) => state.student);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="px-6 py-3 border-b text-left">
          <tr>
            <th className="px-6 py-3 border-b text-left text-[12px]">Student Name</th>
            <th className="px-6 py-3 border-b text-left text-[12px]">Cohort</th>
            <th className="px-6 py-3 border-b text-left text-[12px]">Courses</th>
            <th className="px-6 py-3 border-b text-left text-[12px]">Date Joined</th>
            <th className="px-6 py-3 border-b text-left text-[12px]">Last Login</th>
            <th className="px-6 py-3 border-b text-left text-[12px]">Status</th>
          </tr>
        </thead>
        <tbody className="px-6 py-4 border-b text-left">
          {students.map((student, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-6 py-3 border-b text-[12px]">{student.name}</td>
              <td className="px-6 py-3 border-b text-[12px]">{student.cohort}</td>
              <td className="px-6 py-3 border-b text-[12px]">
                <div className="flex flex-wrap gap-2">
                  {student.courses.map((course, idx) => (
                    <div key={idx} className="flex items-center">
                      <img
                        src={course.teacher_image}
                        alt={course.name}
                        className="w-5 h-5 ml-1"
                      />
                      <span className="ml-2 text-[12px]">{course.name}</span>
                    </div>
                  ))}
                </div>
              </td>
              <td className="px-6 py-3 border-b text-[12px]">{student.date_joined}</td>
              <td className="px-6 py-3 border-b text-[12px]">{student.last_login}</td>
              <td className="px-6 py-3 border-b text-[12px]">
                <span
                  className={`inline-block w-3 h-3 rounded-full ${
                    student.status === "active" ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
