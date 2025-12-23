// src/Components/BusinessDashboard.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaShippingFast,
  FaWallet,
  FaClipboardList,
  FaChartLine,
} from "react-icons/fa";

export default function BusinessDashboard() {
  const userName = localStorage.getItem("userName") || "Business Owner";

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120 },
    },
    hover: { scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" },
  };

  const stats = [
    {
      title: "Total Shipments",
      value: 128,
      icon: <FaShippingFast className="text-3xl text-white" />,
      color: "bg-blue-500",
    },
    {
      title: "Revenue (₦)",
      value: "2,450,000",
      icon: <FaWallet className="text-3xl text-white" />,
      color: "bg-green-500",
    },
    {
      title: "Pending Orders",
      value: 24,
      icon: <FaClipboardList className="text-3xl text-white" />,
      color: "bg-yellow-500",
    },
    {
      title: "Growth Rate",
      value: "12%",
      icon: <FaChartLine className="text-3xl text-white" />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div
      id="dash"
      className="min-h-screen bg-gradient-to-b from-[#e0f2fe] to-[#f0f9ff] p-6 md:p-10 mt-20"
    >
      {/* Welcome Hero */}
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl font-extrabold text-[#0369a1] mb-3 animate-pulse">
          Welcome, {userName}!
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Manage your shipments, track orders, and monitor your business growth.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className={`p-6 rounded-2xl flex flex-col items-center justify-center ${stat.color} text-white cursor-pointer`}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="mb-3">{stat.icon}</div>
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="mt-1">{stat.title}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick Action Cards */}
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#0369a1] cursor-pointer flex flex-col items-center text-center"
          variants={cardVariants}
          whileHover="hover"
        >
          <FaShippingFast className="text-4xl text-[#0369a1] mb-3" />
          <h2 className="text-2xl font-bold mb-2">Create Shipment</h2>
          <p className="text-gray-600 mb-4">
            Add a new shipment request quickly.
          </p>
          <Link
            to="/Book"
            className="bg-[#0369a1] hover:bg-[#025985] text-white px-5 py-2 rounded-lg transition"
          >
            Go
          </Link>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#0369a1] cursor-pointer flex flex-col items-center text-center"
          variants={cardVariants}
          whileHover="hover"
        >
          <FaClipboardList className="text-4xl text-[#0369a1] mb-3" />
          <h2 className="text-2xl font-bold mb-2">View Deliveries</h2>
          <p className="text-gray-600 mb-4">
            Track all active shipments and delivery status.
          </p>
          <Link
            to="/Shipment"
            className="bg-[#0369a1] hover:bg-[#025985] text-white px-5 py-2 rounded-lg transition"
          >
            Go
          </Link>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#0369a1] cursor-pointer flex flex-col items-center text-center"
          variants={cardVariants}
          whileHover="hover"
        >
          <FaWallet className="text-4xl text-[#0369a1] mb-3" />
          <h2 className="text-2xl font-bold mb-2">Payments</h2>
          <p className="text-gray-600 mb-4">
            View all payments and invoices for your shipments.
          </p>
          <Link
            to="/pay"
            className="bg-[#0369a1] hover:bg-[#025985] text-white px-5 py-2 rounded-lg transition"
          >
            Go
          </Link>
        </motion.div>
      </motion.div>

      {/* Recent Shipments */}
      <motion.div
        className="bg-white rounded-2xl p-6 shadow-lg overflow-x-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-[#0369a1] mb-4">
          Recent Shipments
        </h2>
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b p-3 text-gray-600">Tracking ID</th>
              <th className="border-b p-3 text-gray-600">Status</th>
              <th className="border-b p-3 text-gray-600">Origin</th>
              <th className="border-b p-3 text-gray-600">Destination</th>
              <th className="border-b p-3 text-gray-600">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 transition">
              <td className="p-3 font-semibold">SHIP-123456</td>
              <td className="p-3">
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
                  Delivered
                </span>
              </td>
              <td className="p-3">Lagos, Nigeria</td>
              <td className="p-3">New York, USA</td>
              <td className="p-3">10 Dec 2025</td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="p-3 font-semibold">SHIP-123457</td>
              <td className="p-3">
                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
                  In Transit
                </span>
              </td>
              <td className="p-3">Abuja, Nigeria</td>
              <td className="p-3">London, UK</td>
              <td className="p-3">09 Dec 2025</td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      {/* Floating Add Shipment Button */}
      <Link
        to="/Book"
        className="fixed bottom-10 right-10 bg-[#0369a1] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-[#025985] transition transform hover:scale-110"
      >
        <FaShippingFast className="text-2xl" />
      </Link>
    </div>
  );
}
