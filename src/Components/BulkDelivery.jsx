import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BulkDelivery() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    pickupAddress: "",
    deliveryAddress: "",
    packageDetails: "",
    numberOfPackages: "",
    specialInstructions: "",
    paymentAmount: "",
  });

  const [trackingID, setTrackingID] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate unique tracking ID
    const generatedTrackingID =
      "BULK-" + Math.floor(100000 + Math.random() * 900000);
    setTrackingID(generatedTrackingID);
    setSubmissionSuccess(true);

    // TODO: Integrate payment API and backend submission
    alert(
      `Bulk delivery request submitted successfully!\nTracking ID: ${generatedTrackingID}`
    );
  };

  return (
    <div
      id="BulkDelivery"
      className="min-h-screen bg-[#f0f9ff] pt-32 px-6 md:px-16 font-sans"
    >
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-[#0369a1] mb-6 text-center">
          Bulk Delivery Request
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Fill out the form below to request bulk delivery services. We provide
          optimized routes, dedicated support, and competitive pricing for your
          business.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Info */}
          <div>
            <label className="block mb-2 font-semibold">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold">Contact Person</label>
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
              />
            </div>

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

          {/* Pickup & Delivery Info */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold">
                Package Details
              </label>
              <input
                type="text"
                name="packageDetails"
                value={formData.packageDetails}
                onChange={handleChange}
                placeholder="Weight, dimensions, contents"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Number of Packages
              </label>
              <input
                type="number"
                name="numberOfPackages"
                value={formData.numberOfPackages}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Special Instructions
            </label>
            <textarea
              name="specialInstructions"
              value={formData.specialInstructions}
              onChange={handleChange}
              rows="3"
              placeholder="Any specific handling or delivery instructions"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
            />
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

        {/* Success & Tracking */}
        {submissionSuccess && (
          <div className="mt-6 bg-green-100 p-4 rounded-lg text-center">
            <p className="text-green-800 font-semibold">
              Bulk delivery request submitted successfully!
            </p>
            <p className="mt-2">
              <span className="font-bold">Tracking ID:</span> {trackingID}
            </p>
            <p className="mt-2 text-gray-700">
              Use this ID to track your delivery in real-time.
            </p>
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
