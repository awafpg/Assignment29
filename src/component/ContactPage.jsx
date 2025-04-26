import React from "react";

const ContactPage = ({ shopName, navLinks, contactTitle, mapSrc }) => {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-yellow-500 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white">
            {shopName}
          </a>
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-white hover:text-gray-200">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            {contactTitle}
          </h2>
          <div className="max-w-lg mx-auto">
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded mb-4"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded mb-4"
              placeholder="Your Email"
            />
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded mb-4"
              placeholder="Your Phone"
            />
            <textarea
              className="w-full p-3 border border-gray-300 rounded mb-4"
              placeholder="Message"
              rows="5"
            ></textarea>
            <button className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600">
              SEND
            </button>
          </div>
          <div className="mt-10">
            <iframe
              className="w-full h-96 rounded-lg shadow-lg"
              src={mapSrc}
              allowFullScreen
              title="Map Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 {shopName}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
