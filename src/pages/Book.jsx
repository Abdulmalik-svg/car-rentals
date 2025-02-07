import React, { useState } from "react";

const Book = () => {
  const [appointment, setAppointment] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "House Cleaning",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000); // Hide confirmation after 3 sec
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Book an Appointment
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Schedule a cleaning service at your convenience.
        </p>

        {/* Success Alert */}
        {success && (
          <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-center">
            ✅ Appointment Confirmed! We will contact you soon.
          </div>
        )}

        {/* Appointment Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input 
              type="text" 
              name="name"
              value={appointment.name}
              onChange={handleChange}
              placeholder="Enter your name" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required 
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={appointment.email}
              onChange={handleChange}
              placeholder="Enter your email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required 
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              value={appointment.phone}
              onChange={handleChange}
              placeholder="Enter your phone number" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required 
            />
          </div>

          {/* Date & Time */}
          <div className="flex space-x-4">
            <div>
              <label className="block text-gray-700">Date</label>
              <input 
                type="date" 
                name="date"
                value={appointment.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required 
              />
            </div>
            <div>
              <label className="block text-gray-700">Time</label>
              <input 
                type="time" 
                name="time"
                value={appointment.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required 
              />
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-gray-700">Select Service</label>
            <select 
              name="service"
              value={appointment.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="House Cleaning">House Cleaning</option>
              <option value="Office Cleaning">Office Cleaning</option>
              <option value="Carpet Cleaning">Carpet Cleaning</option>
              <option value="Deep Cleaning">Deep Cleaning</option>
            </select>
          </div>

          {/* Book Appointment Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
          <a href="http://localhost:5173/payments" className=" text-white no-underline"> Book Appointment</a> 
          </button>
        </form>
      </div>
    </section>
  );
};

export default Book;
