import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";  // Import the required icons

const Navbar = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-[#1e1b4b] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt size={16} /> {/* Phone icon from React Icons */}
              <span>Call for help: +234-816-7769-208</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope size={16} /> {/* Mail icon from React Icons */}
              <span>Mail to us: bhigdhaddie@gmail.com</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img
              src="src/assets/soniclogo.jpg"
              alt="Cleaning Company Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </a>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="/" className="no-underline hover:text-blue-600">Home</a>
            <a href="/aboutus" className="no-underline hover:text-blue-600">About Us</a>
            <a href="/services" className="no-underline hover:text-blue-600">Services</a>
           
            
            <a href="/login" className="no-underline hover:text-blue-600">Contact Us</a>
            
          </div>
        </div>

        {/* Mobile Menu - Hidden by default */}
        <div className="lg:hidden bg-white px-4 py-2">
          <a href="/" className="block py-2 no-underline hover:text-blue-600">Home</a>
          <a href="/aboutus" className="block py-2 no-underline hover:text-blue-600">About Us</a>
          <a href="/services" className="block py-2 no-underline hover:text-blue-600">Services</a>
          <a href="/blog" className="block py-2 no-underline hover:text-blue-600">Blog</a>
          <a href="/contact" className="block py-2 no-underline hover:text-blue-600">Contact Us</a>
          <button className="bg-yellow-400 text-black hover:bg-yellow-500 w-full py-2 rounded mt-2">
            Get A Quote
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
