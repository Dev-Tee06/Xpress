import { useState } from "react";
import { Menu, X, Bell } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/home" },
    { name: "Services", to: "/services" },
    { name: "Pricing", to: "/pricing" },
    { name: "Contact", to: "/contact" },
    { name: "Book a ride", to: "/book-a-ride" },
    { name: "DashBoard", to: "/dash" }, // ← REAL LOGIN PAGE
    { name: "LogOut", to: "/logout" },
  ];

  return (
    <nav className="w-full bg-[#fff] shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-5xl font-bold tracking-wide">
          <span className="text-black">X</span>
          <span className="text-[#0369a1]">press</span>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-lg">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="
                relative text-black hover:font-semibold 
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-[3px] after:bg-[#0369a1]
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {item.name}
            </Link>
          ))}

          {/* Notification Icon */}
          <button className="ml-4">
            <Bell size={26} color="#0369a1" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-3 text-white rounded-full bg-[#0369a1] transition flex items-center justify-center"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-inner px-6 pb-4 space-y-3 font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 bg-[#0369a1] text-white rounded-full"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
