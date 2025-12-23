// src/Components/RoleSelection.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "./AuthContext";
import business from "../assets/business.jpeg";
import rider from "../assets/rider.jpeg";

export default function RoleSelection() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Redirect if user is not logged in
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleSelection = (role) => {
    localStorage.setItem("userRole", role);

    if (role === "business") {
      navigate("/home");
    } else if (role === "rider") {
      navigate("/rider-home");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
    },
  };

  return (
    <motion.div
      id="role"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* TEXT LOGO */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide flex items-center gap-1"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        Welcome to X<span className="text-[#0369a1]">press</span>
      </motion.h1>

      <motion.p
        className="text-gray-700 mb-10 text-center text-lg md:text-xl max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Choose your role to begin. Xpress delivers a seamless experience for
        both business owners managing logistics and riders on the move.
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row gap-8 w-full max-w-4xl"
        variants={containerVariants}
      >
        {/* BUSINESS CARD */}
        <motion.div
          onClick={() => handleSelection("business")}
          className="cursor-pointer bg-white shadow-lg rounded-2xl flex-1 text-center border-t-4 border-[#0369a1] overflow-hidden"
          variants={cardVariants}
          whileHover="hover"
        >
          <img
            src={business}
            alt="Business Owner"
            className="w-full h-52 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-[#0369a1]">
              Business Owner
            </h2>
            <p className="text-gray-600">
              Manage deliveries, monitor shipments, and access powerful
              logistics tools tailored for business growth.
            </p>
          </div>
        </motion.div>

        {/* RIDER CARD */}
        <motion.div
          onClick={() => handleSelection("rider")}
          className="cursor-pointer bg-white shadow-lg rounded-2xl flex-1 text-center border-t-4 border-[#0369a1] overflow-hidden"
          variants={cardVariants}
          whileHover="hover"
        >
          <img src={rider} alt="Rider" className="w-full h-52 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-[#0369a1]">Rider</h2>
            <p className="text-gray-600">
              Accept deliveries, update statuses, and earn rewards while
              providing fast and reliable service.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
