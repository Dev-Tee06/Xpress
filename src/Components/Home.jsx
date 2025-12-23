import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logistics1 from "../assets/logistics1.jpg";
import logistics2 from "../assets/logistics2.jpg";
import logistics3 from "../assets/logistics3.jpg";

// NEXT ARROW
function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Next slide"
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-xl 
      rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 
      z-20 text-2xl hidden md:flex"
    >
      ❯
    </button>
  );
}

// PREV ARROW
function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Previous slide"
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-xl 
      rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 
      z-20 text-2xl hidden md:flex"
    >
      ❮
    </button>
  );
}

export default function Home() {
  const slides = [
    {
      title: "Fast & Reliable Delivery",
      subtitle:
        "Get your packages delivered on time, every time. Track your shipments and enjoy seamless service.",
      primary: "Get Started",
      secondary: "Learn More",
      image: logistics2,
    },
    {
      title: "Safe & Secure Logistics",
      subtitle:
        "Your shipments are handled with maximum care using advanced tracking and security protocols.",
      primary: "Ship Now",
      secondary: "Our Services",
      image: logistics1,
    },
    {
      title: "Nationwide Coverage",
      subtitle:
        "We deliver to every state — connecting people and businesses across the country.",
      primary: "Check Locations",
      secondary: "Contact Us",
      image: logistics3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: { arrows: false },
      },
    ],
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* HERO SECTION */}
      <section className="w-full h-auto bg-[#f0f9ff] pt-[60px] md:pt-[120px] min-h-[70vh] md:min-h-[100vh] lg:min-h-[90vh]">
        <Slider {...settings} className="mt-10 md:mt-16">
          {slides.map((slide, idx) => (
            <div key={idx}>
              <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-0">
                {/* LEFT TEXT */}
                <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
                  <h1
                    className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight"
                    style={{ color: "#0369a1" }}
                  >
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-2xl mb-8 text-gray-700 leading-relaxed">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    {/* Primary CTA button linked to /login */}
                    <Link
                      to="/login"
                      className="px-10 py-4 rounded-full bg-[#0369a1] text-white font-semibold hover:bg-blue-700 transition text-center"
                    >
                      {slide.primary}
                    </Link>

                    {/* Secondary CTA button linked to services or any page */}
                    <Link
                      to="/services"
                      className="px-10 py-4 rounded-full border-2 border-[#0369a1] text-[#0369a1] font-semibold hover:bg-[#0369a1] hover:text-white transition text-center"
                    >
                      {slide.secondary}
                    </Link>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-[300px] sm:w-[350px] md:w-[450px] rounded-2xl shadow-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 md:px-16 py-24 bg-white">
        <h2
          className="text-3xl md:text-5xl font-bold mb-16 text-center"
          style={{ color: "#0369a1" }}
        >
          Why Choose Xpress?
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center p-10 bg-[#f0f9ff] rounded-xl shadow">
            <h3
              className="text-2xl md:text-3xl font-semibold mb-4"
              style={{ color: "#0369a1" }}
            >
              Fast Delivery
            </h3>
            <p className="text-gray-700">
              We ensure your parcels reach their destination quickly and safely.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-10 bg-[#f0f9ff] rounded-xl shadow">
            <h3
              className="text-2xl md:text-3xl font-semibold mb-4"
              style={{ color: "#0369a1" }}
            >
              Real-time Tracking
            </h3>
            <p className="text-gray-700">
              Monitor your delivery at every step using our live tracking
              system.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-10 bg-[#f0f9ff] rounded-xl shadow">
            <h3
              className="text-2xl md:text-3xl font-semibold mb-4"
              style={{ color: "#0369a1" }}
            >
              24/7 Support
            </h3>
            <p className="text-gray-700">
              Our customer support is always available to assist you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
