// src/components/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

function Navbar({ shopName }) {
  return (
    <nav className="bg-yellow-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="#" className="text-2xl font-bold text-white">
          {shopName}
        </Link>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="text-white hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#menu" className="text-white hover:text-gray-200">
              Menu
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
