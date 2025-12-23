import React from "react";

function Footer() {
  return (
    <footer className="bg-[#fff] pt-20 pb-10 px-6 md:px-20 border-t border-blue-100">
      <div className="grid md:grid-cols-4 gap-12">
        {/* BRAND */}
        <div>
          <h2 className="text-5xl font-extrabold mb-4 text-[#0369a1]">
            {" "}
            <span className="text-black">X</span>press
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Fast, secure, and reliable delivery services connecting businesses
            and individuals nationwide.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3
            className="text-xl font-semibold mb-4"
            style={{ color: "#0369a1" }}
          >
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-[#0369a1] transition cursor-pointer">
              Home
            </li>
            <li className="hover:text-[#0369a1] transition cursor-pointer">
              Services
            </li>
            <li className="hover:text-[#0369a1] transition cursor-pointer">
              Pricing
            </li>
            <li className="hover:text-[#0369a1] transition cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3
            className="text-xl font-semibold mb-4"
            style={{ color: "#0369a1" }}
          >
            Support
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-[#0369a1] transition cursor-pointer">
              Help Center
            </li>
            <li className="hover:text-[#0369a1] transition cursor-pointer">
              Track Your Parcel
            </li>
            <li className="hover:text-[#0369a1] transition cursor-pointer">
              FAQs
            </li>
            <li className="hover:text-[#0369a1] transition cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3
            className="text-xl font-semibold mb-4"
            style={{ color: "#0369a1" }}
          >
            Contact Us
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>📍 45 Industrial Road, Lagos, Nigeria</li>
            <li>📞 +234 808 123 4567</li>
            <li>✉ support@xpresslogistics.com</li>
          </ul>

          <div className="flex gap-4 mt-4">
            <div className="w-10 h-10 rounded-full bg-[#0369a1] text-white flex items-center justify-center cursor-pointer hover:bg-blue-700 transition">
              f
            </div>
            <div className="w-10 h-10 rounded-full bg-[#0369a1] text-white flex items-center justify-center cursor-pointer hover:bg-blue-700 transition">
              in
            </div>
            <div className="w-10 h-10 rounded-full bg-[#0369a1] text-white flex items-center justify-center cursor-pointer hover:bg-blue-700 transition">
              →
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="border-t border-blue-200 mt-16 pt-6 text-center text-gray-700">
        © {new Date().getFullYear()} Xpress Logistics. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
