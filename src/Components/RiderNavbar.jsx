// src/Components/RiderNavbar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiBell } from "react-icons/fi";

export default function RiderNavbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/role");
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 px-6 py-4 flex justify-between items-center">
      <h1
        className="text-5xl font-extrabold tracking-wide cursor-pointer"
        onClick={() => navigate("/rider-home")}
      >
        <span className="text-black">X</span>
        <span className="text-[#0369a1]">press</span>
      </h1>

      <div className="hidden md:flex items-center gap-8 text-[#0369a1] font-semibold">
        <button onClick={() => navigate("/rider-home")}>Dashboard</button>
        <button onClick={() => navigate("/rider-requests")}>Requests</button>
        <button onClick={() => navigate("/rider-ongoing")}>Ongoing</button>
        <button onClick={() => navigate("/rider-completed")}>Completed</button>
        <button onClick={() => navigate("/rider-profile")}>Profile</button>
        <FiBell className="text-2xl cursor-pointer" />
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
    </nav>
  );
}
