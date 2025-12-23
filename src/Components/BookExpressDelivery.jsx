import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BookExpressDelivery() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupAddress: "",
    deliveryAddress: "",
    packageDetails: "",
    preferredDate: "",
    preferredTime: "",
    paymentAmount: "",
  });

  const [trackingID, setTrackingID] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate random tracking ID
    const newTrackingID = "EXP-" + Math.floor(100000 + Math.random() * 900000);
    setTrackingID(newTrackingID);

    alert(
      `Your Express Delivery booking has been submitted! Your Tracking ID: ${newTrackingID}`
    );

    // Replace with API integration & payment gateway in production
  };

  return (
    <div
      id="Book"
      className="min-h-screen bg-[#f0f9ff] pt-32 px-6 md:px-16 font-sans"
    >
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-[#0369a1] mb-6 text-center">
          Book Express Delivery
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Fill out the form below to schedule your express delivery. Our team
          will confirm and ensure fast and reliable service.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-semibold">Pickup Address</label>
            <input
              type="text"
              name="pickupAddress"
              value={formData.pickupAddress}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Delivery Address</label>
            <input
              type="text"
              name="deliveryAddress"
              value={formData.deliveryAddress}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Package Details</label>
            <textarea
              name="packageDetails"
              value={formData.packageDetails}
              onChange={handleChange}
              rows="3"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold">Preferred Date</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Preferred Time</label>
              <input
                type="time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
              />
            </div>
          </div>

          {/* Online Payment */}
          <div>
            <label className="block mb-2 font-semibold">
              Payment Amount (₦)
            </label>
            <input
              type="number"
              name="paymentAmount"
              value={formData.paymentAmount}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
            />
          </div>

          <div className="text-center">
            <Link
              to="/pay"
              state={{ email: formData.email, amount: formData.paymentAmount }}
              className="bg-[#0369a1] text-white py-3 px-10 rounded-xl font-semibold text-lg hover:bg-[#025985] transition inline-block"
            >
              Pay
            </Link>
          </div>
        </form>

        {/* Real-Time Tracking */}
        {trackingID && (
          <div className="mt-6 bg-green-100 p-4 rounded-lg text-center">
            <p className="text-green-800 font-semibold">
              Your Express Delivery booking has been submitted successfully!
            </p>
            <p className="mt-2">
              Your <span className="font-bold">Tracking ID:</span>{" "}
              <span className="text-[#0369a1]">{trackingID}</span>
            </p>
            <p className="mt-2 text-gray-700">
              Use this ID to track your delivery in real time.
            </p>
            <Link
              to={`/track/${trackingID}`}
              className="inline-block mt-4 bg-[#0369a1] text-white py-2 px-6 rounded-xl hover:bg-[#025985] transition"
            >
              Track Package
            </Link>
          </div>
        )}

        <div className="mt-6 text-center">
          <Link
            to="/services"
            className="text-[#0369a1] font-semibold hover:underline"
          >
            Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
}
