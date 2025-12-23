import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    consultationType: "",
    message: "",
    paymentAmount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Integrate with a payment gateway API
    alert(
      `Consultation request submitted successfully!\nPayment Amount: ₦${formData.paymentAmount}`
    );
  };

  return (
    <div
      id="Consultation"
      className="min-h-screen bg-[#f0f9ff] py-16 px-6 md:px-16 font-sans"
    >
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-[#0369a1] mb-6 text-center">
          Request a Logistics Consultation
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Fill out the form below to schedule a consultation with our logistics
          experts. We'll provide tailored solutions for your business.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
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

          {/* Company Info */}
          <div>
            <label className="block mb-2 font-semibold">
              Company Name (Optional)
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
            />
          </div>

          {/* Consultation Type */}
          <div>
            <label className="block mb-2 font-semibold">
              Type of Consultation
            </label>
            <select
              name="consultationType"
              value={formData.consultationType}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
            >
              <option value="">Select Consultation Type</option>
              <option value="supply-chain">Supply Chain Optimization</option>
              <option value="delivery-operations">
                Delivery Operations Review
              </option>
              <option value="logistics-strategy">
                Custom Logistics Strategy
              </option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-semibold">Message / Notes</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Any details or specific concerns you want us to know"
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

          {/* Submit Button */}
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

        {/* Back Link */}
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
