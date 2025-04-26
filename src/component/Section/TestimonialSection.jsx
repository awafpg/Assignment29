import React from "react";

function TestimonialSection({ testimonials }) {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          What Our Customers Say
        </h2>
        <div className="flex space-x-8 justify-center">
          {testimonials.map((client, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={client.img}
                alt={client.name}
                className="w-30 h-30 mb-4"
              />
              <h3 className="text-xl font-semibold">{client.name}</h3>
              <p className="text-gray-600">"{client.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
