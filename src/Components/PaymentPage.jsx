import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function PaymentPage() {
  const location = useLocation();

  // Pre-fill from Shipment page
  const initialEmail = location.state?.email || "";
  const initialAmount = location.state?.amount || "";

  const [email, setEmail] = useState(initialEmail);
  const [amount, setAmount] = useState(initialAmount);
  const [error, setError] = useState("");

  useEffect(() => {
    // load Paystack inline script
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const payWithPaystack = (e) => {
    e.preventDefault();

    if (!email || !amount) {
      setError("All fields are required");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: "pk_test_xxxxxxxxxxxx", // Replace with your public key
      email,
      amount: amount * 100,
      currency: "NGN",
      callback: function (response) {
        alert("Payment successful! Ref: " + response.reference);
      },
      onClose: function () {
        alert("Payment window closed.");
      },
    });

    handler.openIframe();
  };

  return (
    <div
      id="pay"
      className="min-h-screen bg-gray-50 flex items-center justify-center p-6"
    >
      <div className="bg-white shadow-lg p-10 rounded-2xl max-w-md w-full border-t-4 border-[#0369a1]">
        <h1 className="text-2xl font-bold text-[#0369a1] mb-6 text-center">
          Xpress Payment Page
        </h1>

        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
        )}

        <form onSubmit={payWithPaystack}>
          <label className="text-sm font-semibold">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded-lg mb-4"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-sm font-semibold">Amount (NGN)</label>
          <input
            type="number"
            className="w-full p-3 border rounded-lg mb-6"
            placeholder="2000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-[#0369a1] text-white py-3 rounded-lg font-semibold hover:bg-[#02527f] transition"
          >
            Pay Now
          </button>
        </form>

        <Link
          to="/services"
          className="block text-center text-[#0369a1] mt-5 font-semibold hover:underline"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
