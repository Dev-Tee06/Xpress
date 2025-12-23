import { FiArrowRight } from "react-icons/fi";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem("hasVisited", "true");
      navigate("/login");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleStart = () => {
    localStorage.setItem("hasVisited", "true");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] flex flex-col items-center justify-center px-6 text-center">
      <motion.h1
        className="text-5xl font-bold mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Welcome to X<span className="text-[#0369a1]">press</span>
      </motion.h1>
      <motion.button
        onClick={handleStart}
        className="bg-[#0369a1] text-white px-6 py-3 rounded-xl mt-4 flex items-center gap-2"
      >
        Get Started <FiArrowRight />
      </motion.button>
    </div>
  );
}
