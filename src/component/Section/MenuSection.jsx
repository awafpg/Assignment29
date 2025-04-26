import React from "react";
import { Link } from "react-router-dom";

function MenuSection({ menuItems }) {
  return (
    <section id="menu" className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Our Coffee Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
              <Link
                to="/cofee"
                className="text-yellow-500 mt-4 border p-2 rounded-md inline-block font-semibold"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
