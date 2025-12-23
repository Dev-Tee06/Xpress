import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RequestStoragePlan() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    storageType: "",
    storageDuration: "",
    specialRequirements: "",
    paymentAmount: "",
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentReference, setPaymentReference] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate payment processing
    const reference = "PAY-" + Math.floor(100000 + Math.random() * 900000);
    setPaymentReference(reference);
    setPaymentSuccess(true);

    alert(
      `Your storage plan request has been submitted!\nPayment Reference: ${reference}`
    );

    // Replace this with real API call & payment gateway integration
  };

  return (
    <div
      id="RequestStorage"
      className="min-h-screen bg-[#f0f9ff] pt-32 px-6 md:px-16 font-sans"
    >
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-[#0369a1] mb-6 text-center">
          Request a Storage Plan
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Fill out the form below to request a tailored storage solution. Our
          team will contact you to confirm and provide the best plan for your
          needs.
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
            <label className="block mb-2 font-semibold">
              Business Name (Optional)
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold">Storage Type</label>
              <select
                name="storageType"
                value={formData.storageType}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0369a1]"
              >
                <option value="">Select Storage Type</option>
                <option value="short-term">Short-Term</option>
                <option value="long-term">Long-Term</option>
                <option value="climate-controlled">Climate Controlled</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Storage Duration
              </label>
              <input
                type="text"
                name="storageDuration"
                value={formData.storageDuration}
                onChange={handleChange}
                placeholder="e.g., 3 months, 1 year"
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
              placeholder="Any special handling or storage needs"
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

        {/* Payment Success */}
        {paymentSuccess && (
          <div className="mt-6 bg-green-100 p-4 rounded-lg text-center">
            <p className="text-green-800 font-semibold">
              Your storage plan request has been successfully submitted!
            </p>
            <p className="mt-2">
              Payment Reference:{" "}
              <span className="font-bold">{paymentReference}</span>
            </p>
            <p className="mt-2 text-gray-700">
              Our team will contact you with further details.
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
