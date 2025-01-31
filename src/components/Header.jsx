import React from "react";
import { Mail, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Header() {
  return (
    <header className="w-full bg-[#5F4BA9] text-white">
      {/* Top bar */}
      <div className="py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center text-sm">
            <Mail className="h-4 w-4 mr-2" />
            <a
              href="mailto:testemail@gmail.com"
              className="hover:text-gray-200"
            >
              testemail@gmail.in
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-white bg-blue-800 p-1 hover:text-gray-200 rounded"
            >
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="text-white bg-blue-500 p-1 hover:text-gray-200 rounded"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="#"
              className="text-white bg-pink-500 p-1 hover:text-gray-200 rounded"
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-white bg-red-600 p-1 hover:text-gray-200 rounded"
            >
              <Youtube className="h-4 w-4" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>
        <h1 className="text-2xl text-center mt-5 mb-5 font-bold">
          Welcome to My School
        </h1>
      </div>
    </header>
  );
}
