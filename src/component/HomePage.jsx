// src/pages/HomePage.jsx

import React from "react";
import Navbar from "../component/Section/Navbar";
import AboutsSection from "../component/Section/AboutsSection";
import MenuSection from "../component/Section/MenuSection";
import TestimonialSection from "../component/Section/TestimonialSection";

function HomePage({ shopName, about, menuItems, testimonials }) {
  return (
    <div className="bg-gray-100">
      <Navbar shopName={shopName} />

      {/* Header */}
      <header
        className="bg-cover bg-center h-screen flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/src/assets/images/banner-bg.jpg')" }}
      >
        <div className="text-center p-5 bg-yellow-500 bg-opacity-50 rounded-lg">
          <h1 className="text-5xl font-bold">Welcome to {shopName}</h1>
          <p className="text-lg mt-2">
            Your perfect place for coffee & relaxation
          </p>
          <a
            href="#menu"
            className="mt-4 inline-block bg-yellow-400 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600"
          >
            View Menu
          </a>
        </div>
      </header>

      <AboutsSection about={about} />
      <MenuSection menuItems={menuItems} />
      <TestimonialSection testimonials={testimonials} />

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 {shopName}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
