import React from "react";

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Professional Cleaning Services</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-3"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide top-notch cleaning services to keep your home and office spotless. Book a cleaner today!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="/public/house.jpg" alt="House Cleaning" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-gray-700">House Cleaning</h3>
            <p className="text-gray-600">Keep your home fresh and spotless with our expert cleaners.</p>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="/public/office.jpg" alt="Office Cleaning" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-gray-700">Office Cleaning</h3>
            <p className="text-gray-600">Maintain a clean and professional workspace effortlessly.</p>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="/public/factory.jpg" alt="Factory Cleaning" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-gray-700">Factory Cleaning</h3>
            <p className="text-gray-600">Ensure hygiene and safety in industrial environments.</p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-3"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our professional cleaners are experienced, reliable, and dedicated to providing top-quality service.  
            Whether it's a home, office, or industrial space, we get the job done right!
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <a href="/contact" className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          <a href="http://localhost:5173/book" className=" text-white no-underline">Book a Cleaning Service</a>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
