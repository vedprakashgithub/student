import { useState } from "react";
import { db, addDoc, collection } from "../firebase";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const AddStudentModal = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    class: "",
    section: "",
    rollNumber: "",
    dob: "",
    address: "",
    phone: "",
    guardianName: "",
    guardianPhone: "",
    email: "",
    admissionDate: "",
    bloodGroup: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    // Validation checks
    if (!studentData.name) formErrors.name = "Name is required";
    if (!studentData.class) formErrors.class = "Class is required";
    if (!studentData.section) formErrors.section = "Section is required";
    if (!studentData.rollNumber)
      formErrors.rollNumber = "Roll Number is required";
    if (!studentData.dob) formErrors.dob = "Date of Birth is required";
    if (!studentData.address) formErrors.address = "Address is required";
    if (!studentData.phone) formErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(studentData.phone))
      formErrors.phone = "Phone number must be 10 digits";
    if (!studentData.guardianName)
      formErrors.guardianName = "Guardian's name is required";
    if (!studentData.guardianPhone)
      formErrors.guardianPhone = "Guardian's phone number is required";
    else if (!/^\d{10}$/.test(studentData.guardianPhone))
      formErrors.guardianPhone = "Guardian's phone number must be 10 digits";
    if (!studentData.email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(studentData.email))
      formErrors.email = "Email is invalid";
    if (!studentData.admissionDate)
      formErrors.admissionDate = "Admission Date is required";
    if (!studentData.bloodGroup)
      formErrors.bloodGroup = "Blood group is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      // Add the student to Firestore
      await addDoc(collection(db, "students"), studentData);

      // Show success message
      setSuccessMessage("Student added successfully!");

      // Clear the form fields after successful submission
      setStudentData({
        name: "",
        class: "",
        section: "",
        rollNumber: "",
        dob: "",
        address: "",
        phone: "",
        guardianName: "",
        guardianPhone: "",
        email: "",
        admissionDate: "",
        bloodGroup: "",
      });

      // Optionally, you can redirect to another page
      // navigate("/students"); // If you want to navigate after success
    } catch (err) {
      console.log(err);
      setSuccessMessage("Failed to add student. Please try again.");
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Form Area */}
      <div className="flex-1 p-8 mt-10 lg:ml-64">
        {" "}
        {/* This will push the form right after the sidebar on larger screens */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Add Student</h2>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            {errors.name && (
              <span className="text-red-600 text-sm mb-2 block">
                {errors.name}
              </span>
            )}
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={studentData.name}
              onChange={handleChange}
              placeholder="Enter student's name"
              className="w-full p-3 mb-4 border rounded"
            />

            {/* Class */}
            {errors.class && (
              <span className="text-red-600 text-sm mb-2 block">
                {errors.class}
              </span>
            )}
            <label
              htmlFor="class"
              className="block text-sm font-medium text-gray-700"
            >
              Class
            </label>
            <input
              type="text"
              id="class"
              name="class"
              value={studentData.class}
              onChange={handleChange}
              placeholder="Enter class"
              className="w-full p-3 mb-4 border rounded"
            />

            {/* Section */}
            {errors.section && (
              <span className="text-red-600 text-sm mb-2 block">
                {errors.section}
              </span>
            )}
            <label
              htmlFor="section"
              className="block text-sm font-medium text-gray-700"
            >
              Section
            </label>
            <input
              type="text"
              id="section"
              name="section"
              value={studentData.section}
              onChange={handleChange}
              placeholder="Enter section"
              className="w-full p-3 mb-4 border rounded"
            />

            {/* Roll Number */}
            {errors.rollNumber && (
              <span className="text-red-600 text-sm mb-2 block">
                {errors.rollNumber}
              </span>
            )}
            <label
              htmlFor="rollNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Roll Number
            </label>
            <input
              type="text"
              id="rollNumber"
              name="rollNumber"
              value={studentData.rollNumber}
              onChange={handleChange}
              placeholder="Enter roll number"
              className="w-full p-3 mb-4 border rounded"
            />

            {/* Date of Birth */}
            {errors.dob && (
              <span className="text-red-600 text-sm mb-2 block">
                {errors.dob}
              </span>
            )}
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={studentData.dob}
              onChange={handleChange}
              className="w-full p-3 mb-4 border rounded"
            />

            {/* Address */}
            {errors.address && (
              <span className="text-red-600 text-sm mb-2 block">
                {errors.address}
              </span>
            )}
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={studentData.address}
              onChange={handleChange}
              placeholder="Enter address"
              className="w-full p-3 mb-4 border rounded"
            />

            {/* Phone */}
            {errors.phone && (
              <span className="text-red-600 text-sm mb-2 block">
                {errors.phone}
              </span>
            )}
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={studentData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full p-3 mb-4 border rounded"
            />

            {/* Guardian's Name */}
            {errors.guardianName && (
              <span className="text-red-600 text-sm mb-2 block">
                {errors.guardianName}
              </span>
            )}
            <label
              htmlFor="guardianName"
              className="block text-sm font-medium text-gray-700"
            >
              Guardian's Name
            </label>
            <input
              type="text"
              id="guardianName"
              name="guardianName"
              value={studentData.guardianName}
              onChange={handleChange}
              placeholder="Enter guardian's name"
              className="w-full p-3 mb-4 border rounded"
            />

            {/* Guardian's Phone */}
            {errors.guardianPhone && (
              <span className="text-red-600 text-sm mb-2 block">
                {errors.guardianPhone}
              </span>
            )}
            <label
              htmlFor="guardianPhone"
              className="block text-sm font-medium text-gray-700"
            >
              Guardian's Phone
            </label>
            <input
              type="text"
              id="guardianPhone"
              name="guardianPhone"
              value={studentData.guardianPhone}
              onChange={handleChange}
              placeholder="Enter guardian's phone number"
              className="w-full p-3 mb-4 border rounded"
            />

            {/* Email */}
            {errors.email && (
              <span className="text-red-600 text-sm mb-2 block">
                {errors.email}
              </span>
            )}
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={studentData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full p-3 mb-4 border rounded"
            />

            {/* Admission Date */}
            {errors.admissionDate && (
              <span className="text-red-600 text-sm mb-2 block">
                {errors.admissionDate}
              </span>
            )}
            <label
              htmlFor="admissionDate"
              className="block text-sm font-medium text-gray-700"
            >
              Admission Date
            </label>
            <input
              type="date"
              id="admissionDate"
              name="admissionDate"
              value={studentData.admissionDate}
              onChange={handleChange}
              className="w-full p-3 mb-4 border rounded"
            />

            {/* Blood Group */}
            {errors.bloodGroup && (
              <span className="text-red-600 text-sm mb-2 block">
                {errors.bloodGroup}
              </span>
            )}
            <label
              htmlFor="bloodGroup"
              className="block text-sm font-medium text-gray-700"
            >
              Blood Group
            </label>
            <input
              type="text"
              id="bloodGroup"
              name="bloodGroup"
              value={studentData.bloodGroup}
              onChange={handleChange}
              placeholder="Enter blood group"
              className="w-full p-3 mb-4 border rounded"
            />

            <button
              type="submit"
              className=" cursor-pointer w-full py-3 bg-green-500 text-white rounded"
            >
              Submit
            </button>
          </form>
          {successMessage && (
            <div className="mb-1 mt-4 p-3 text-center text-green-600 bg-green-100 border border-green-300 rounded">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddStudentModal;
