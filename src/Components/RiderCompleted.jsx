// src/Components/RiderCompleted.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiMapPin,
  FiPackage,
  FiClock,
  FiUser,
} from "react-icons/fi";
import { motion } from "framer-motion";

// Sample completed deliveries data
const completedDeliveries = [
  {
    id: "00098",
    pickup: "Ibadan",
    delivery: "Lagos",
    customer: "Jane Doe",
    package: "Documents",
    distance: "120km",
    time: "Yesterday, 3:00 PM",
    status: "Completed",
  },
  {
    id: "00099",
    pickup: "Lagos",
    delivery: "Abuja",
    customer: "John Smith",
    package: "Electronics",
    distance: "450km",
    time: "Yesterday, 11:00 AM",
    status: "Completed",
  },
];

export default function RiderCompleted() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredDeliveries = completedDeliveries.filter(
    (d) =>
      d.pickup.toLowerCase().includes(search.toLowerCase()) ||
      d.delivery.toLowerCase().includes(search.toLowerCase()) ||
      d.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/rider-home")}
        className="flex items-center gap-2 text-[#0369a1] font-semibold mb-6"
      >
        <FiArrowLeft /> Back to Dashboard
      </button>

      {/* Page Header */}
      <h1 className="text-3xl font-bold text-[#0369a1] mb-2">
        Completed Deliveries
      </h1>
      <p className="text-gray-700 mb-6">
        All deliveries you have successfully completed.
      </p>

      {/* Search Bar */}
      <div className="flex items-center gap-2 mb-6 max-w-md">
        <FiMapPin className="text-gray-500 text-xl" />
        <input
          type="text"
          placeholder="Search by city, customer, or package"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
        />
      </div>

      {/* Completed Deliveries List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDeliveries.length === 0 && (
          <p className="text-gray-500 col-span-full">
            No completed deliveries found.
          </p>
        )}

        {filteredDeliveries.map((delivery) => (
          <motion.div
            key={delivery.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-green-500"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold text-lg text-[#0369a1]">
                Order #{delivery.id}
              </h2>
              <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-600">
                {delivery.status} ✅
              </span>
            </div>

            <p className="text-gray-600 flex items-center gap-2">
              <FiMapPin /> Pickup: {delivery.pickup} | Delivery:{" "}
              {delivery.delivery}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <FiUser /> Customer: {delivery.customer}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <FiPackage /> Package: {delivery.package}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <FiClock /> Delivered at: {delivery.time} | Distance:{" "}
              {delivery.distance}
            </p>

            <div className="mt-4 flex gap-3">
              <button className="flex-1 bg-[#0369a1] text-white py-2 rounded-xl hover:bg-[#025985] transition">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
