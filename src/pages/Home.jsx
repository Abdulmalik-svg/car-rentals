import React from "react";
import { PhoneCall, Mail } from "lucide-react";
import { Link } from "react-router";
const Home = () => {
  const services = [
    {
      title: "House Cleaning",
      description: "Come home to a spotless and fresh-smelling house. Contact us for assistance.",
      image: "/house.jpg",
    },
    {
      title: "Office Cleaning",
      description: "Maintain a clean and productive office environment with our expert services.",
      image: "/office.jpg",
    },
    {
      title: "Factory Cleaning",
      description: "Ensure a safe and hygienic workplace with our industrial cleaning services.",
      image: "/factory.jpg",
    },
  ];
  

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <span className="text-yellow-400 uppercase tracking-wider">CLEANING COMPANY</span>
              <h1 className="text-5xl font-bold leading-tight">
                Best <span className="text-yellow-400">Cleaning</span> for your better lifestyle
              </h1>
              <p className="text-lg opacity-90">
                Affordable and economical way to clean your premises professionally with a host of services ranging from
                carpet and floor cleaning to windows and deep clean.
              </p>
              <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-4 py-2 rounded">
               <a href="http://localhost:5173/book" className=" text-white no-underline">Appointment</a> 
              </button>
            </div>
            <div className="relative h-[400px]">
              <img
                src="/public/black.jpg"
                alt="Cleaning Staff"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h6 className="text-blue-600 uppercase mb-2">OUR BEST SERVICES</h6>
      <h2 className="text-3xl font-bold text-[#1e1b4b]">
        We Are Offering The Best Cleaning
        <br /> Services For You
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
      {services.map((service, index) => (
        <div key={index} className="overflow-hidden shadow-lg rounded-lg bg-white">
          {/* Image */}
          <img
            src={service.image} // Dynamically assign each service image
            alt={service.title}
            className="w-full h-48 object-cover"
          />

          {/* Text Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <button className="text-blue-600 border-blue-600 border-2 px-4 py-2 rounded">
            <Link to="/house">More Details</Link> 
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <img
                src="/public/bucket.jpg"
                alt="Cleaning Supplies"
                className="object-contain rounded-lg w-full h-full"
              />
              <div className="absolute bottom-4 right-4 bg-yellow-400 p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">2500+</div>
                  <div className="text-sm">Satisfied Customers</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h6 className="text-blue-600 uppercase">ABOUT US</h6>
              <h2 className="text-3xl font-bold text-[#1e1b4b]">We Are Best Company In Cleaning</h2>
              <p className="text-gray-600">
                After a long day at work, picture arriving home to a spotlessly clean, fragrant house. Please click the
                link if you require our assistance.
              </p>
              <div className="space-y-4">
                {["100% Satisfaction Guaranteed", "Expert cleaning staff", "Free lifetime support"].map(
                  (feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </div>
                  )
                )}
              </div>
              <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#1e1b4b] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h6 className="text-yellow-400 uppercase mb-2">WHY CHOOSE US</h6>
            <h2 className="text-3xl font-bold">
              Our top priority is seeing
              <br /> you happy.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
