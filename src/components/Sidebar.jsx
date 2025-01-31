import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar Button for small screens */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-4 text-white bg-blue-600 rounded-md fixed top-4 left-4 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-40 transition-transform ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        } lg:translate-x-0 lg:block`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <button className="lg:hidden text-white" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mt-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/students"
                className="block py-2 px-4 hover:bg-blue-600 rounded-md"
              >
                Students Page
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                className="block py-2 px-4 hover:bg-red-600 rounded-md"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay for mobile screens */}
      <div
        className={`lg:hidden fixed z-30 transition-opacity ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none "
        }`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
};

export default Sidebar;
