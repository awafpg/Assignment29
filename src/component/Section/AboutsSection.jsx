import React from "react";

function AboutsSection({ about }) {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          About Our Shop
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10">
          <div className="w-full md:w-1/2">
            <img
              src={about.image}
              alt={about.title}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0 text-left">
            <h3 className="text-3xl font-semibold text-yellow-600">
              {about.title}
            </h3>
            <p className="text-gray-600 mt-4">{about.description}</p>
            <a
              href="#"
              className="mt-4 inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutsSection;
