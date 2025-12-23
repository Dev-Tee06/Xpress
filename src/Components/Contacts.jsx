import React from "react";
import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <div className="min-h-screen bg-[#f0f9ff] flex items-start justify-center px-6 py-16 pt-28">
      {/* Added pt-28 to push container below the navbar */}

      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-3xl border-t-4 border-[#0369a1]">
        {/* Contact Page Link */}
        <div className="mb-6">
          <Link to="/contact"></Link>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-black">X</span>
          <span className="text-[#0369a1]">press</span> Contact Us
        </h2>

        {/* Content Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-semibold text-[#0369a1] mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-4">
              Have questions or need support? Reach out to us anytime.
            </p>

            <p className="text-gray-700 font-medium mb-2">📍 Address:</p>
            <p className="text-gray-600 mb-4">
              123 Logistics Avenue, Lagos, Nigeria
            </p>

            <p className="text-gray-700 font-medium mb-2">📞 Phone:</p>
            <p className="text-gray-600 mb-4">+234 812 345 6789</p>

            <p className="text-gray-700 font-medium mb-2">📧 Email:</p>
            <p className="text-gray-600">support@xpress.com</p>
          </div>

          {/* Contact Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#0369a1] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#0369a1] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#0369a1] focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0369a1] text-white py-3 rounded-lg text-lg font-medium hover:bg-[#025985] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
