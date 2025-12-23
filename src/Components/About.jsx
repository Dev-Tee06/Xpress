import React from "react";
import logistics1 from "../assets/logistics1.jpg";
import logistics2 from "../assets/logistics2.jpg";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white font-sans pt-[110px] md:pt-[130px]">
      {/* HEADER */}
      <section className="text-center px-6 md:px-20 mb-20">
        <h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
          style={{ color: "#0369a1" }}
        >
          About Xpress Logistics
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Delivering speed, security, and reliability to businesses and
          individuals nationwide.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 mb-28">
        <div className="md:w-1/2">
          <img
            src={logistics1}
            className="rounded-2xl shadow-lg w-full object-cover"
            alt="Our logistics team"
          />
        </div>

        <div className="md:w-1/2">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#0369a1" }}
          >
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Xpress Logistics is a leading delivery and transportation company
            committed to providing fast, secure, and reliable shipping services
            across the nation. We combine advanced technology with a dedicated
            team to ensure your parcels arrive on time and in perfect condition.
          </p>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="px-6 md:px-20 flex flex-col-reverse md:flex-row items-center gap-12 mb-28">
        <div className="md:w-1/2">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#0369a1" }}
          >
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our mission is to connect people and businesses through efficient
            logistics solutions. We aim to simplify delivery for everyone by
            offering transparency, speed, and exceptional customer service at
            every step.
          </p>
        </div>

        <div className="md:w-1/2">
          <img
            src={logistics2}
            className="rounded-2xl shadow-lg w-full object-cover"
            alt="Xpress mission"
          />
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 md:px-20 mb-28">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "#0369a1" }}
        >
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-10 bg-[#f0f9ff] rounded-xl shadow text-center">
            <h3
              className="text-2xl md:text-3xl font-semibold mb-4"
              style={{ color: "#0369a1" }}
            >
              Reliability
            </h3>
            <p className="text-gray-700">
              We do exactly what we promise — on time, every time.
            </p>
          </div>

          <div className="p-10 bg-[#f0f9ff] rounded-xl shadow text-center">
            <h3
              className="text-2xl md:text-3xl font-semibold mb-4"
              style={{ color: "#0369a1" }}
            >
              Security
            </h3>
            <p className="text-gray-700">
              Your parcels are protected with advanced safety and tracking
              systems.
            </p>
          </div>

          <div className="p-10 bg-[#f0f9ff] rounded-xl shadow text-center">
            <h3
              className="text-2xl md:text-3xl font-semibold mb-4"
              style={{ color: "#0369a1" }}
            >
              Customer Focus
            </h3>
            <p className="text-gray-700">
              We are dedicated to providing seamless delivery experiences for
              all clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
