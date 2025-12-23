import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Updated services list with CTA links
  const services = [
    {
      title: "Express Delivery",
      description: [
        "Fast and reliable delivery across the city and nationwide.",
        "Real-time tracking so you always know the status of your package.",
        "Flexible delivery timings that match your schedule.",
      ],
      icon: "🚀",
      cta: { text: "Book Express Delivery", link: "/Book" },
    },
    {
      title: "Warehousing Solutions",
      description: [
        "Secure and monitored storage for all goods.",
        "Detailed inventory management to keep track of your products.",
        "Flexible storage options for short-term or long-term use.",
      ],
      icon: "🏬",
      cta: { text: "Request Storage Plan", link: "/RequestStorage" },
    },
    {
      title: "Logistics Consulting",
      description: [
        "Expert guidance to optimize your logistics operations.",
        "Improve delivery speed while reducing overall costs.",
        "Tailored strategies built for your business model.",
      ],
      icon: "📊",
      cta: { text: "Get Expert Consultation", link: "/consultation" },
    },
    {
      title: "International Shipping",
      description: [
        "Smooth delivery across borders with full customs support.",
        "Cost-effective rates for small and large shipments.",
        "Careful handling for fragile and high-value items.",
      ],
      icon: "🌍",
      cta: { text: "Start International Shipment", link: "/Shipment" },
    },
    {
      title: "Pickup Scheduling",
      description: [
        "Schedule pickups from your home or business at your convenience.",
        "Select precise pickup windows that work for you.",
        "Receive instant notifications when your rider is on the way.",
      ],
      icon: "📦",
      cta: { text: "Schedule a Pickup", link: "/Pickup" },
    },
    {
      title: "Bulk Delivery Service",
      description: [
        "Ideal for businesses handling high delivery volumes.",
        "Discounted rates for multiple deliveries along the same route.",
        "Dedicated support for packaging, sorting, and dispatching.",
      ],
      icon: "🛻",
      cta: { text: "Request Bulk Delivery", link: "/BulkDelivery" },
    },
  ];

  return (
    <div className="min-h-screen bg-[#f0f9ff] pt-28 px-6 py-16 flex flex-col items-center">
      {/* HERO SECTION */}
      <div className="text-center max-w-3xl mb-16" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Reliable & Professional{" "}
          <span className="text-[#0369a1]">Logistics Services</span>
        </h1>
        <p className="text-gray-600 text-lg mt-4">
          We provide end-to-end delivery, shipping, warehousing, and logistics
          solutions tailored for individuals, businesses, and e-commerce brands.
        </p>

        {/* Primary CTA */}
        <div className="mt-6">
          <Link
            to="/contact"
            className="bg-[#0369a1] text-white py-3 px-10 rounded-xl font-semibold text-lg 
            hover:bg-[#025985] transition text-center w-full md:w-auto"
          >
            Book a Delivery
          </Link>
        </div>
      </div>

      {/* VALUE PROPOSITION */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mb-20">
        {[
          {
            icon: "⚡",
            title: "Fast Delivery",
            text: "We prioritize speed without compromising safety.",
          },
          {
            icon: "🛡️",
            title: "Trusted & Secure",
            text: "Every package is handled with utmost care.",
          },
          {
            icon: "📍",
            title: "Nationwide Reach",
            text: "We deliver to all major cities and states.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-2xl p-8 text-center"
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <div className="text-5xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>

      {/* SERVICES GRID */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-7xl">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition duration-500"
          >
            <div className="flex flex-col items-center text-center mb-6">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <ul className="text-gray-600 list-disc list-inside space-y-2">
                {service.description.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>

            {/* Custom CTA for each service */}
            <div className="mt-6 flex justify-center">
              <Link
                to={service.cta.link}
                className="bg-[#0369a1] text-white py-3 px-8 rounded-xl 
                font-semibold text-lg hover:bg-[#025985] transition
                text-center w-full md:w-auto"
              >
                {service.cta.text}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* PROCESS SECTION */}
      <div className="mt-20 max-w-5xl text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: "📝", title: "1. Place an Order" },
            { icon: "📍", title: "2. We Pick Up" },
            { icon: "🚚", title: "3. We Deliver" },
            { icon: "📲", title: "4. Track in Real-Time" },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow text-center"
            >
              <div className="text-4xl mb-3">{step.icon}</div>
              <h4 className="font-semibold">{step.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="mt-20 max-w-4xl" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "Do you offer same-day delivery?",
              a: "Yes, we offer same-day delivery within select cities.",
            },
            {
              q: "Can I schedule a pickup?",
              a: "Absolutely! You can schedule pickups directly from your home or office.",
            },
            {
              q: "Do you provide bulk delivery discounts?",
              a: "Yes, we offer discounted rates for bulk or recurring deliveries.",
            },
          ].map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-bold mb-2">{faq.q}</h4>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div
        className="mt-20 text-center"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <h2 className="text-3xl font-bold mb-4">
          Need a Custom Logistics Solution?
        </h2>
        <p className="text-gray-600 mb-6">
          Whether it's bulk shipping, special handling, or business integration
          — we’ve got you covered.
        </p>
        <Link
          to="/contact"
          className="bg-[#0369a1] text-white py-3 px-10 rounded-xl 
          font-semibold text-lg hover:bg-[#025985] transition
          text-center w-full md:w-auto"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
