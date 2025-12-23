import React from "react";

function Testimonials() {
  return (
    <section className="px-6 md:px-20 py-24 bg-[#f0f9ff]">
      <h2
        className="text-3xl md:text-5xl font-bold text-center mb-16"
        style={{ color: "#0369a1" }}
      >
        What Our Customers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {/* CARD 1 */}
        <div className="bg-white p-10 rounded-xl shadow-lg transition hover:shadow-2xl hover:border border-[#0369a1]">
          <p className="text-gray-700 leading-relaxed mb-6">
            “Xpress Logistics is the fastest delivery service I’ve used. My
            packages always arrive earlier than expected. Highly reliable!”
          </p>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#0369a1] flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <div>
              <h4
                className="text-lg font-semibold"
                style={{ color: "#0369a1" }}
              >
                Adaobi N.
              </h4>
              <p className="text-gray-500 text-sm">Business Owner</p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white p-10 rounded-xl shadow-lg transition hover:shadow-2xl hover:border border-[#0369a1]">
          <p className="text-gray-700 leading-relaxed mb-6">
            “Their customer support is excellent. I can track every one of my
            shipments in real-time. Very transparent and easy to use.”
          </p>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#0369a1] flex items-center justify-center text-white font-bold text-xl">
              T
            </div>
            <div>
              <h4
                className="text-lg font-semibold"
                style={{ color: "#0369a1" }}
              >
                Tunde A.
              </h4>
              <p className="text-gray-500 text-sm">E-commerce Seller</p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-white p-10 rounded-xl shadow-lg transition hover:shadow-2xl hover:border border-[#0369a1]">
          <p className="text-gray-700 leading-relaxed mb-6">
            “Nationwide delivery is a big plus for my company. They reach areas
            many logistics companies don’t cover. Highly recommended.”
          </p>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#0369a1] flex items-center justify-center text-white font-bold text-xl">
              K
            </div>
            <div>
              <h4
                className="text-lg font-semibold"
                style={{ color: "#0369a1" }}
              >
                Kelechi M.
              </h4>
              <p className="text-gray-500 text-sm">Retail Distributor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
