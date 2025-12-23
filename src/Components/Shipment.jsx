import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Shipment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shipmentType: "",
    originCountry: "",
    destinationCountry: "",
    packageDetails: "",
    specialRequirements: "",
    paymentAmount: "",
  });

  const [trackingID, setTrackingID] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a unique tracking ID
    const generatedTrackingID =
      "SHIP-" + Math.floor(100000 + Math.random() * 900000);
    setTrackingID(generatedTrackingID);
    setSubmissionSuccess(true);

    // Here you can call your API to save shipment details & process payment
    alert(
      `Shipment request submitted successfully!\nTracking ID: ${generatedTrackingID}`
    );
  };

  return (
    <div
      id="Shipment"
      className="min-h-screen bg-[#f0f9ff] pt-32 px-6 md:px-16 font-sans"
    >
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-[#0369a1] mb-6 text-center">
          International Shipping Request
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Fill out the form below to request international shipping. Our team
          will assist you with logistics, customs, and delivery options.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
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

          {/* Shipment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold">Shipment Type</label>
              <select
                name="shipmentType"
                value={formData.shipmentType}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
              >
                <option value="">Select Shipment Type</option>
                <option value="documents">Documents</option>
                <option value="parcel">Parcel / Package</option>
                <option value="bulk">Bulk / Commercial Goods</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-semibold">Origin Country</label>
              <input
                type="text"
                name="originCountry"
                value={formData.originCountry}
                onChange={handleChange}
                placeholder="e.g., Nigeria"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Destination Country
              </label>
              <input
                type="text"
                name="destinationCountry"
                value={formData.destinationCountry}
                onChange={handleChange}
                placeholder="e.g., United States"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
              />
            </div>

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
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Special Requirements
            </label>
            <textarea
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              rows="3"
              placeholder="Any customs or handling instructions"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
            />
          </div>

          {/* Online Payment Feature */}
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

        {/* Submission & Tracking ID */}
        {submissionSuccess && (
          <div className="mt-6 bg-green-100 p-4 rounded-lg text-center">
            <p className="text-green-800 font-semibold">
              Your shipment request has been submitted successfully!
            </p>
            <p className="mt-2">
              <span className="font-bold">Tracking ID:</span> {trackingID}
            </p>
            <p className="mt-2 text-gray-700">
              Use this ID to track your shipment in real-time.
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
