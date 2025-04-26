import React from "react";

const CoffeePage = ({ title, coffees, bannerImage }) => {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-yellow-500 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white">
            Nyan Cafe
          </a>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-white hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-gray-200">
                Menu
              </a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header
        className="bg-cover bg-center h-60 flex items-center justify-center text-white"
        style={{ backgroundImage: `url('${bannerImage}')` }}
      >
        <h1 className="text-4xl font-bold bg-black bg-opacity-50 p-3 rounded-lg">
          {title}
        </h1>
      </header>

      {/* Coffee Types Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Explore Our Coffee Types
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {coffees.map((coffee, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="text-xl font-semibold mt-4">{coffee.name}</h3>
                <p className="text-gray-600 mt-2">{coffee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 Nyan Cafe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CoffeePage;
