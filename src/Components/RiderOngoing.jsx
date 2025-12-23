// src/Components/RiderOngoing.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiMapPin,
  FiClock,
  FiPackage,
  FiPhone,
} from "react-icons/fi";
import { motion } from "framer-motion";

// Sample ongoing deliveries data
const ongoingDeliveries = [
  {
    id: "00123",
    pickup: "Lagos",
    delivery: "Abuja",
    customer: "John Doe",
    package: "Electronics",
    distance: "450km",
    time: "Today, 10:00 AM",
    status: "In Progress",
    contact: "08012345678",
  },
  {
    id: "00124",
    pickup: "Ibadan",
    delivery: "Lagos",
    customer: "Jane Smith",
    package: "Clothing",
    distance: "120km",
    time: "Today, 2:00 PM",
    status: "On Schedule",
    contact: "08098765432",
  },
];

export default function RiderOngoing() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredDeliveries = ongoingDeliveries.filter(
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
        Ongoing Deliveries
      </h1>
      <p className="text-gray-700 mb-6">
        Track and manage all your deliveries currently in progress.
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

      {/* Deliveries List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDeliveries.length === 0 && (
          <p className="text-gray-500 col-span-full">
            No ongoing deliveries found.
          </p>
        )}

        {filteredDeliveries.map((delivery) => (
          <motion.div
            key={delivery.id}
            whileHover={{ scale: 1.03 }}
            className={`bg-white shadow-lg rounded-2xl p-6 border-l-4 ${
              delivery.status === "Delayed"
                ? "border-red-500"
                : "border-[#0369a1]"
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold text-lg text-[#0369a1]">
                Order #{delivery.id}
              </h2>
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  delivery.status === "Delayed"
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {delivery.status}
              </span>
            </div>

            <p className="text-gray-600 flex items-center gap-2">
              <FiMapPin /> Pickup: {delivery.pickup} | Delivery:{" "}
              {delivery.delivery}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <FiPackage /> Package: {delivery.package} | Customer:{" "}
              {delivery.customer}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <FiClock /> {delivery.time} | Distance: {delivery.distance}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <FiPhone /> Contact: {delivery.contact}
            </p>

            <div className="mt-4 flex gap-3">
              <button className="flex-1 bg-[#0369a1] text-white py-2 rounded-xl hover:bg-[#025985] transition">
                Update Status
              </button>
              <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl hover:bg-gray-300 transition">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
