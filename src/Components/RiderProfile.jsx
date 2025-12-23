// src/Components/RiderProfile.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiUser,
  FiMail,
  FiPhone,
  FiCheckCircle,
  FiTruck,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function RiderProfile() {
  const navigate = useNavigate();
  const [rider, setRider] = useState({
    name: "Rider Name",
    email: "rider@example.com",
    phone: "+234 801 234 5678",
    status: "Active",
    completed: 42,
    ongoing: 3,
    earnings: "₦120,000",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/rider-home")}
        className="flex items-center gap-2 text-[#0369a1] font-semibold mb-6"
      >
        <FiArrowLeft /> Back to Dashboard
      </button>

      {/* Header */}
      <h1 className="text-3xl font-bold text-[#0369a1] mb-2">Profile</h1>
      <p className="text-gray-700 mb-6">
        Manage your account details and track your performance.
      </p>

      {/* Profile Card */}
      <motion.div
        className="bg-white shadow-lg rounded-2xl p-6 max-w-lg mx-auto mb-6"
        whileHover={{ scale: 1.02 }}
      >
        {/* Profile Info */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-28 h-28 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-gray-500 text-4xl">
            <FiUser />
          </div>
          <h2 className="text-2xl font-bold text-[#0369a1] mb-1">
            {rider.name}
          </h2>
          <p className="text-gray-600">{rider.email}</p>
        </div>

        {/* Contact & Status */}
        <div className="flex flex-col gap-2 mb-6">
          <p className="text-gray-600 flex items-center gap-2">
            <FiPhone /> {rider.phone}
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <FiCheckCircle /> Status: {rider.status}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-[#0369a1] text-white rounded-xl p-4 text-center">
            <p className="font-bold text-xl">{rider.completed}</p>
            <p className="text-sm">Completed</p>
          </div>
          <div className="bg-[#0369a1] text-white rounded-xl p-4 text-center">
            <p className="font-bold text-xl">{rider.ongoing}</p>
            <p className="text-sm">Ongoing</p>
          </div>
          <div className="bg-[#0369a1] text-white rounded-xl p-4 text-center">
            <p className="font-bold text-xl">{rider.earnings}</p>
            <p className="text-sm">Earnings</p>
          </div>
        </div>

        {/* Edit Profile Button */}
        <button className="w-full px-4 py-2 bg-[#0369a1] text-white rounded-xl hover:bg-[#025985] transition">
          Edit Profile
        </button>
      </motion.div>

      {/* Optional: Additional info section */}
      <motion.div
        className="bg-white shadow-lg rounded-2xl p-6 max-w-lg mx-auto"
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-xl font-bold text-[#0369a1] mb-4">About</h3>
        <p className="text-gray-600">
          Rider on Xpress platform. Committed to timely deliveries and excellent
          service. Update your availability and profile to stay active.
        </p>
      </motion.div>
    </div>
  );
}
