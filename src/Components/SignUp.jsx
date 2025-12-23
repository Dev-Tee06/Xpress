import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f9ff] px-4 py-6 mt-20">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center">
          <span className="text-black">Create </span>
          <span className="text-[#0369a1]">Account</span>
        </h2>

        <p className="text-center text-gray-600 mt-1 text-sm">
          Join X<span className="text-[#0369a1] font-semibold">press</span>{" "}
          today
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">
          {/* Full Name */}
          <div>
            <label className="text-gray-700 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#0369a1] outline-none text-sm"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-700 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#0369a1] outline-none text-sm"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-700 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#0369a1] outline-none text-sm"
              placeholder="Enter password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-gray-700 text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#0369a1] outline-none text-sm"
              placeholder="Re-enter password"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#0369a1] text-white py-2.5 rounded-lg font-semibold text-base hover:bg-[#025178] transition"
          >
            Create Account
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-gray-600 mt-4 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#0369a1] font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
