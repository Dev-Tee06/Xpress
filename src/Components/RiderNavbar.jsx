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
    setOpen(false);
  };

  const handleNav = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4">
        {/* BRAND */}
        <h1
          className="text-3xl sm:text-4xl font-extrabold tracking-tight cursor-pointer"
          onClick={() => navigate("/rider-home")}
        >
          <span className="text-black">X</span>
          <span className="text-[#0369a1]">press</span>
        </h1>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-[#0369a1] font-semibold">
          <button onClick={() => navigate("/rider-home")}>Dashboard</button>
          <button onClick={() => navigate("/rider-requests")}>Requests</button>
          <button onClick={() => navigate("/rider-ongoing")}>Ongoing</button>
          <button onClick={() => navigate("/rider-completed")}>
            Completed
          </button>
          <button onClick={() => navigate("/rider-profile")}>Profile</button>

          <FiBell className="text-2xl cursor-pointer" />

          <button
            onClick={handleLogout}
            className="bg-[#0369a1] text-white px-4 py-2 rounded-xl hover:bg-[#025985] transition"
          >
            Logout
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-[#0369a1]"
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white px-6 py-6 flex flex-col gap-5 text-[#0369a1] font-semibold">
          <button onClick={() => handleNav("/rider-home")}>Dashboard</button>
          <button onClick={() => handleNav("/rider-requests")}>Requests</button>
          <button onClick={() => handleNav("/rider-ongoing")}>Ongoing</button>
          <button onClick={() => handleNav("/rider-completed")}>
            Completed
          </button>
          <button onClick={() => handleNav("/rider-profile")}>Profile</button>

          <div className="h-px bg-gray-200 my-2" />

          <button onClick={handleLogout} className="text-red-500 font-semibold">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
