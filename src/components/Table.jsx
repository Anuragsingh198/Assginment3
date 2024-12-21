import React from 'react';

const students = [
  {
    name: 'Anshuman Kashyap',
    cohort: 'AY 2024-25',
    courses: [
      { name: 'CBSE 9 Science', teacherImage: '/path/to/science-teacher.png' },
      { name: 'CBSE 9 Math', teacherImage: '/path/to/math-teacher.png' }
    ],
    dateJoined: '17. Nov. 2024',
    lastLogin: '17. Nov. 2024 4:16 PM',
    status: 'active',
  },
  {
    name: 'Bansi Dadhaniya',
    cohort: 'AY 2024-25',
    courses: [
      { name: 'CBSE 9 Science', teacherImage: '/path/to/science-teacher.png' },
      { name: 'CBSE 9 Math', teacherImage: '/path/to/math-teacher.png' }
    ],
    dateJoined: '17. Nov. 2024',
    lastLogin: '17. Nov. 2024 4:16 PM',
    status: 'active',
  },
  {
    name: 'Chandrika Valotia',
    cohort: 'AY 2024-25',
    courses: [
      { name: 'CBSE 9 Science', teacherImage: '/path/to/science-teacher.png' },
      { name: 'CBSE 9 Math', teacherImage: '/path/to/math-teacher.png' }
    ],
    dateJoined: '17. Nov. 2024',
    lastLogin: '17. Nov. 2024 4:16 PM',
    status: 'inactive',
  },
  {
    name: 'Chandrika Valotia',
    cohort: 'AY 2024-25',
    courses: [
      { name: 'CBSE 9 Science', teacherImage: '/path/to/science-teacher.png' },
      { name: 'CBSE 9 Math', teacherImage: '/path/to/math-teacher.png' }
    ],
    dateJoined: '17. Nov. 2024',
    lastLogin: '17. Nov. 2024 4:16 PM',
    status: 'inactive',
  },
  {
    name: 'Chandrika Valotia',
    cohort: 'AY 2024-25',
    courses: [
      { name: 'CBSE 9 Science', teacherImage: '/path/to/science-teacher.png' },
      { name: 'CBSE 9 Math', teacherImage: '/path/to/math-teacher.png' }
    ],
    dateJoined: '17. Nov. 2024',
    lastLogin: '17. Nov. 2024 4:16 PM',
    status: 'inactive',
  },
  {
    name: 'Chandrika Valotia',
    cohort: 'AY 2024-25',
    courses: [
      { name: 'CBSE 9 Science', teacherImage: '/path/to/science-teacher.png' },
      { name: 'CBSE 9 Math', teacherImage: '/path/to/math-teacher.png' }
    ],
    dateJoined: '17. Nov. 2024',
    lastLogin: '17. Nov. 2024 4:16 PM',
    status: 'inactive',
  },
  {
    name: 'Chandrika Valotia',
    cohort: 'AY 2024-25',
    courses: [
      { name: 'CBSE 9 Science', teacherImage: '/path/to/science-teacher.png' },
      { name: 'CBSE 9 Math', teacherImage: '/path/to/math-teacher.png' }
    ],
    dateJoined: '17. Nov. 2024',
    lastLogin: '17. Nov. 2024 4:16 PM',
    status: 'inactive',
  },
  {
    name: 'Chandrika Valotia',
    cohort: 'AY 2024-25',
    courses: [
      { name: 'CBSE 9 Science', teacherImage: '/path/to/science-teacher.png' },
      { name: 'CBSE 9 Math', teacherImage: '/path/to/math-teacher.png' }
    ],
    dateJoined: '17. Nov. 2024',
    lastLogin: '17. Nov. 2024 4:16 PM',
    status: 'inactive',
  },
];

const Table = () => {
  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full bg-white ">
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
            <tr key={index} className="hover:bg-gray-100 ]">
              <td className="px-6 py-3 border-b text-[12px]">{student.name}</td>
              <td className="px-6 py-3 border-b text-[12px]">{student.cohort}</td>
              <td className="px-6 py-3 border-b text-[12px]">
                <div className="flex flex-wrap gap-2">
                  {student.courses.map((course, idx) => (
                    <div
                      key={idx}
                      className="flex items-center"
                      style={{ width: '125px', height: '25px' }}
                    >
                      <img
                        src={course.teacherImage}
                        alt={course.name}
                        style={{ width: '20px', height: '20px', marginLeft: '4px' }}
                      />
                      <span
                        style={{
                          marginLeft: '8px',
                          fontSize: '12px',
                          width: '72px',
                          height: '16px',
                          lineHeight: '16px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {course.name}
                      </span>
                    </div>
                  ))}
                </div>
              </td>
              <td className="px-6 py-3 border-b text-[12px]">{student.dateJoined}</td>
              <td className="px-6 py-3 border-b text-[12px]">{student.lastLogin}</td>
              <td className="px-6 py-3 border-b text-[12px]">
                <span
                  className={`inline-block w-3 h-3 rounded-full ${
                    student.status === 'active' ? 'bg-green-500' : 'bg-red-500'
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
