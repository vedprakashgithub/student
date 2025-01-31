import { useEffect, useState } from "react";
import { db, collection, getDocs, deleteDoc, doc } from "../firebase";
import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "../components/Sidebar"; // Import Sidebar component

const StudentsPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const querySnapshot = await getDocs(collection(db, "students"));
      const studentData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(studentData);
    };
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "students", id));
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <div className="flex">
      {/* Sidebar Component */}
      <Sidebar />
      {/* Main Content Area */}
      <div className="flex-1 p-8 mt-10 lg:ml-64">
        {" "}
        {/* Adjusts based on screen size */}
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Students</h1>
          <Link
            to="/add-student"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Student
          </Link>
        </div>
        {/* Student Table */}
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Class</th>
              <th className="border p-2">Section</th>
              <th className="border p-2">Roll Number</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td className="border p-2">{index + 1}</td> {/* Starts at 1 */}
                <td className="border p-2">{student.name}</td>
                <td className="border p-2">{student.class}</td>
                <td className="border p-2">{student.section}</td>
                <td className="border p-2">{student.rollNumber}</td>
                <td className="border p-3  flex gap-4">
                  <FaEye className="cursor-pointer" />
                  <FaEdit className="cursor-pointer" />
                  <FaTrash
                    onClick={() => handleDelete(student.id)}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsPage;
