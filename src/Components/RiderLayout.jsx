// src/Components/RiderLayout.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import RiderNavbar from "./RiderNavbar"; // Separate Navbar for Rider

export default function RiderLayout({ children }) {
  const location = useLocation();

  return (
    <>
      <RiderNavbar /> {/* only shows Rider navbar */}
      <div className="pt-20">{children}</div> {/* Add padding for navbar */}
    </>
  );
}
