import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiTruck,
  FiMapPin,
  FiCheckCircle,
  FiUser,
  FiBell,
  FiDollarSign,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function RiderHome() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    "New delivery request from Lagos.",
    "Order #00124 completed successfully.",
  ]);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/role-selection");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd]">
      {/* NAVBAR */}
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-5xl font-extrabold tracking-wide cursor-pointer"
          onClick={() => navigate("/rider-home")}
        >
          <span className="text-black text-5xl">X</span>
          <span className="text-[#0369a1] text-5xl">press</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-[#0369a1] font-semibold">
          <button
            onClick={() => navigate("/rider-home")}
            className="hover:text-black"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/rider-requests")}
            className="hover:text-black"
          >
            Requests
          </button>
          <button
            onClick={() => navigate("/rider-ongoing")}
            className="hover:text-black"
          >
            Ongoing
          </button>
          <button
            onClick={() => navigate("/rider-completed")}
            className="hover:text-black"
          >
            Completed
          </button>
          <button
            onClick={() => navigate("/rider-profile")}
            className="hover:text-black"
          >
            Profile
          </button>

          {/* Notifications */}
          <div className="relative">
            <FiBell className="text-2xl cursor-pointer hover:text-black" />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {notifications.length}
              </span>
            )}
          </div>

          <button
            onClick={handleLogout}
            className="bg-[#0369a1] text-white px-4 py-2 rounded-xl hover:bg-[#025985]"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-[#0369a1]"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-5 text-[#0369a1] font-semibold">
          <button onClick={() => navigate("/rider-home")}>Dashboard</button>
          <button onClick={() => navigate("/rider-requests")}>Requests</button>
          <button onClick={() => navigate("/rider-ongoing")}>Ongoing</button>
          <button onClick={() => navigate("/rider-completed")}>
            Completed
          </button>
          <button onClick={() => navigate("/rider-profile")}>Profile</button>
          <button onClick={handleLogout} className="text-red-500">
            Logout
          </button>
        </div>
      )}

      {/* CONTENT */}
      <div className="pt-32 px-6 pb-10 max-w-6xl mx-auto">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 text-center cursor-pointer border-t-4 border-[#0369a1]"
          >
            <FiTruck className="text-4xl text-[#0369a1] mb-2 mx-auto" />
            <p className="font-bold text-xl text-[#0369a1]">5</p>
            <p className="text-gray-600 mt-1">New Requests</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 text-center cursor-pointer border-t-4 border-[#0369a1]"
          >
            <FiMapPin className="text-4xl text-[#0369a1] mb-2 mx-auto" />
            <p className="font-bold text-xl text-[#0369a1]">2</p>
            <p className="text-gray-600 mt-1">Ongoing</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 text-center cursor-pointer border-t-4 border-[#0369a1]"
          >
            <FiCheckCircle className="text-4xl text-[#0369a1] mb-2 mx-auto" />
            <p className="font-bold text-xl text-[#0369a1]">10</p>
            <p className="text-gray-600 mt-1">Completed</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 text-center cursor-pointer border-t-4 border-[#0369a1]"
          >
            <FiDollarSign className="text-4xl text-[#0369a1] mb-2 mx-auto" />
            <p className="font-bold text-xl text-[#0369a1]">₦120k</p>
            <p className="text-gray-600 mt-1">Earnings</p>
          </motion.div>
        </div>

        {/* Welcome Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-2xl p-6 mb-10"
        >
          <h2 className="text-2xl font-bold text-[#0369a1] mb-2">
            Welcome, Rider 👋
          </h2>
          <p className="text-gray-600">
            Access your delivery tasks, track ongoing trips, and manage your
            dashboard easily.
          </p>
        </motion.div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#0369a1] cursor-pointer"
            onClick={() => navigate("/rider-requests")}
          >
            <FiTruck className="text-4xl text-[#0369a1] mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-center text-[#0369a1]">
              New Delivery Requests
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Accept delivery jobs assigned to you.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#0369a1] cursor-pointer"
            onClick={() => navigate("/rider-ongoing")}
          >
            <FiMapPin className="text-4xl text-[#0369a1] mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-center text-[#0369a1]">
              Ongoing Deliveries
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Track and update delivery progress.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#0369a1] cursor-pointer"
            onClick={() => navigate("/rider-completed")}
          >
            <FiCheckCircle className="text-4xl text-[#0369a1] mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-center text-[#0369a1]">
              Completed Deliveries
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Review your delivery history.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
