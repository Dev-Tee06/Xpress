import React from "react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const pricingPlans = [
    {
      title: "Express Delivery",
      price: "₦15,000",
      description:
        "Fast and reliable delivery for individuals and small businesses.",
      features: [
        "Delivery within 4–6 hours",
        "Real-time tracking of your package",
        "Flexible delivery timing",
        "Priority handling",
      ],
      cta: { text: "Book Express Delivery", link: "/Book" },
    },
    {
      title: "Warehousing Solutions",
      price: "₦100,000 / month",
      description: "Secure and monitored storage with inventory management.",
      features: [
        "Safe storage for all product types",
        "Inventory tracking & reporting",
        "Short-term or long-term plans",
        "Access to your goods anytime",
      ],
      cta: { text: "Request Storage Plan", link: "/RequestStorage" },
    },
    {
      title: "Logistics Consulting",
      price: "₦25,000 / session",
      description:
        "Expert advice to optimize your supply chain and reduce costs.",
      features: [
        "Operations analysis",
        "Customized delivery strategy",
        "Cost-saving recommendations",
        "Performance optimization",
      ],
      cta: { text: "Get Expert Consultation", link: "/consultation" },
    },
    {
      title: "International Shipping",
      price: "Custom Pricing",
      description: "Seamless international delivery with full customs support.",
      features: [
        "Cross-border shipping",
        "Professional handling of fragile goods",
        "Affordable rates for small or bulk shipments",
        "End-to-end tracking",
      ],
      cta: { text: "Start International Shipment", link: "/Shipment" },
    },
    {
      title: "Pickup Scheduling",
      price: "₦5,500 per pickup",
      description: "Convenient pickups from your home or business location.",
      features: [
        "Choose exact pickup windows",
        "Instant rider notifications",
        "Flexible scheduling",
      ],
      cta: { text: "Schedule a Pickup", link: "/Pickup" },
    },
    {
      title: "Bulk Delivery Service",
      price: "Custom Pricing",
      description:
        "Perfect for e-commerce vendors and businesses handling large volumes.",
      features: [
        "Multiple deliveries per route",
        "Discounted rates",
        "Packaging, sorting & dispatch support",
        "Dedicated logistics account manager",
      ],
      cta: { text: "Request Bulk Delivery", link: "/BulkDelivery" },
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-6 md:px-16 font-sans">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0369a1] mt-10">
        Our Pricing Plans
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-8">
        Choose the right service for your business or personal needs.
        Transparent pricing, no hidden fees, and flexible options.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#f0f9ff] border border-[#0369a1]/20 p-8 rounded-2xl shadow hover:shadow-2xl transition duration-500"
          >
            <h2 className="text-2xl font-semibold text-[#0369a1] mb-2">
              {plan.title}
            </h2>
            <p className="text-gray-700 mb-4">{plan.description}</p>
            <p className="text-3xl font-bold text-gray-800 mb-6">
              {plan.price}
            </p>

            <ul className="space-y-2 mb-6 text-gray-700">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#0369a1] font-bold">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA button linked to respective page */}
            <div className="flex justify-center">
              <Link
                to={plan.cta.link}
                className="bg-[#0369a1] text-white py-3 px-8 rounded-xl font-semibold text-lg hover:bg-[#025985] transition text-center w-full md:w-auto"
              >
                {plan.cta.text}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Unsure which plan fits your needs?
        </h2>
        <Link
          to="/contact"
          className="bg-[#0369a1] text-white py-3 px-8 rounded-xl font-semibold text-lg hover:bg-[#025985] transition text-center w-full md:w-auto inline-block"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
