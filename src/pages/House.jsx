import React from "react";

const House = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Professional House Cleaning Services</h1>
        <p className="mt-4 text-lg">
          Let us handle the cleaning while you enjoy a fresh and spotless home!
        </p>
      </section>

      {/* Service Details */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Our House Cleaning Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Deep Cleaning", img: "src/assets/house23.jpg" },
            { title: "Move-In/Move-Out Cleaning", img: "src/assets/house23.jpg" },
            { title: "Regular Cleaning", img: "src/assets/house23.jpg" },
          ].map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
              <img src={service.img} alt={service.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold">Book a Cleaning Service Today</h2>
        <p className="mt-2 text-lg">We are just one call away from a spotless home.</p>
        <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold">
          Book Now
        </button>
      </section>
    </div>
  );
};

export default House;
