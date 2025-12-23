// BookARider.jsx — Professional, colorful, mobile-responsive, without map/live tracking
import React, { useState, useEffect } from "react";
import { FiMapPin, FiPackage, FiTruck, FiX, FiStar } from "react-icons/fi";

export default function BookARider() {
  const brandColor = "#0369a1";

  // Pickup & Drop-off
  const [pickup, setPickup] = useState("");
  const [pickupPhone, setPickupPhone] = useState("");
  const [pickupNote, setPickupNote] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [dropoffPhone, setDropoffPhone] = useState("");
  const [dropoffNote, setDropoffNote] = useState("");

  // Package details
  const [packageType, setPackageType] = useState("Parcel");
  const [weight, setWeight] = useState(1);
  const [fragile, setFragile] = useState(false);

  // Delivery options
  const [vehicle, setVehicle] = useState("bike");
  const [deliveryMode, setDeliveryMode] = useState("instant");

  // Promo & Payment
  const [promo, setPromo] = useState("");
  const [payment, setPayment] = useState("card");

  // Fare & Distance
  const [fare, setFare] = useState(0);
  const [distance, setDistance] = useState(0);

  // Ride lifecycle
  const [rideStatus, setRideStatus] = useState("idle"); // idle | searching | ongoing | completed | cancelled
  const [driver, setDriver] = useState(null);
  const [eta, setEta] = useState(0);
  const [rating, setRating] = useState(0);

  // Fare calculation
  useEffect(() => {
    if (pickup && dropoff) {
      const dist = Math.floor(Math.random() * 7) + 2;
      setDistance(dist);
      const baseFare = 300;
      const perKm = 120;
      const fragileFee = fragile ? 200 : 0;
      const weightFee = weight > 2 ? (weight - 2) * 50 : 0;
      let totalFare = baseFare + dist * perKm + fragileFee + weightFee;
      if (promo.toLowerCase() === "xp10") totalFare *= 0.9;
      setFare(Math.round(totalFare));
    } else {
      setDistance(0);
      setFare(0);
    }
  }, [pickup, dropoff, weight, fragile, promo]);

  // Countdown timer
  useEffect(() => {
    if (rideStatus === "ongoing" && eta > 0) {
      const timer = setInterval(() => setEta((t) => t - 1), 1000);
      return () => clearInterval(timer);
    }
    if (eta === 0 && rideStatus === "ongoing") {
      setRideStatus("completed");
    }
  }, [eta, rideStatus]);

  const confirmRide = () => {
    if (!pickup || !dropoff || !pickupPhone || !dropoffPhone) {
      alert("Please fill all required fields.");
      return;
    }

    setRideStatus("searching");

    // Simulate driver assignment
    setTimeout(() => {
      setDriver({
        name: "Samuel Okoro",
        phone: "+2348051239988",
        vehicle,
        plate: "KJA-223BD",
        rating: 4.8,
      });
      setEta(180); // 3 minutes countdown
      setRideStatus("ongoing");
    }, 2000);
  };

  const cancelRide = () => {
    if (rideStatus === "ongoing" || rideStatus === "searching") {
      if (!window.confirm("Cancel this ride? A cancellation fee may apply."))
        return;
    }
    setRideStatus("cancelled");
    setDriver(null);
    setEta(0);
  };

  const resetForm = () => {
    setPickup("");
    setPickupPhone("");
    setPickupNote("");
    setDropoff("");
    setDropoffPhone("");
    setDropoffNote("");
    setPackageType("Parcel");
    setWeight(1);
    setFragile(false);
    setVehicle("bike");
    setDeliveryMode("instant");
    setPromo("");
    setPayment("card");
    setFare(0);
    setDistance(0);
    setRideStatus("idle");
    setDriver(null);
    setRating(0);
  };

  const formatTime = (sec) =>
    `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;

  return (
    <div className="max-w-5xl mx-auto mt-20 p-5">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          X<span className="text-[#0369a1]">press</span> - Book a Rider
        </h1>
        <p className="text-gray-600">
          Fast local deliveries, anytime, anywhere
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <main className="lg:col-span-2 space-y-6">
          {/* Pickup */}
          <section className="bg-blue-50 p-5 rounded-xl shadow border-l-4 border-blue-500">
            <h2 className="font-semibold flex items-center gap-2 mb-3">
              <FiMapPin /> Pickup
            </h2>
            <input
              className="w-full p-3 border rounded mb-2"
              placeholder="Pickup address"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            <input
              className="w-full p-3 border rounded mb-2"
              placeholder="Pickup phone"
              value={pickupPhone}
              onChange={(e) => setPickupPhone(e.target.value)}
            />
            <textarea
              className="w-full p-3 border rounded"
              placeholder="Pickup note"
              value={pickupNote}
              onChange={(e) => setPickupNote(e.target.value)}
            />
          </section>

          {/* Drop-off */}
          <section className="bg-green-50 p-5 rounded-xl shadow border-l-4 border-green-500">
            <h2 className="font-semibold flex items-center gap-2 mb-3">
              <FiMapPin /> Drop-off
            </h2>
            <input
              className="w-full p-3 border rounded mb-2"
              placeholder="Drop-off address"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
            />
            <input
              className="w-full p-3 border rounded mb-2"
              placeholder="Recipient phone"
              value={dropoffPhone}
              onChange={(e) => setDropoffPhone(e.target.value)}
            />
            <textarea
              className="w-full p-3 border rounded"
              placeholder="Drop-off note"
              value={dropoffNote}
              onChange={(e) => setDropoffNote(e.target.value)}
            />
          </section>

          {/* Package */}
          <section className="bg-white p-5 rounded-xl shadow border-l-4 border-purple-500">
            <h2 className="font-semibold flex items-center gap-2 mb-3">
              <FiPackage /> Package
            </h2>
            <select
              className="w-full p-2 border rounded mb-2"
              value={packageType}
              onChange={(e) => setPackageType(e.target.value)}
            >
              <option>Parcel</option>
              <option>Document</option>
              <option>Food</option>
              <option>Fragile</option>
            </select>
            <input
              type="number"
              min="1"
              className="w-full p-2 border rounded mb-2"
              value={weight}
              onChange={(e) => setWeight(+e.target.value)}
            />
            <label className="flex gap-2 text-sm">
              <input
                type="checkbox"
                checked={fragile}
                onChange={(e) => setFragile(e.target.checked)}
              />{" "}
              Fragile
            </label>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white p-5 rounded-xl shadow border-l-4 border-blue-400">
            <h3 className="font-semibold">Order Summary</h3>
            <p className="text-sm">Distance: {distance} km</p>
            <p className="font-bold text-lg">Fare: ₦{fare}</p>

            {rideStatus === "idle" && (
              <button
                style={{ backgroundColor: brandColor }}
                className="w-full mt-4 p-3 text-white rounded"
                onClick={confirmRide}
              >
                Confirm & Book Rider
              </button>
            )}

            {rideStatus === "searching" && (
              <p className="mt-3 text-blue-600">Searching for rider...</p>
            )}

            {rideStatus === "ongoing" && (
              <div className="mt-3 text-sm">
                <p className="font-semibold">Driver: {driver?.name}</p>
                <p>Vehicle: {driver?.vehicle}</p>
                <p>Plate: {driver?.plate}</p>
                <p className="text-green-600 font-semibold">
                  ETA: {formatTime(eta)}
                </p>
                <button
                  onClick={cancelRide}
                  className="mt-3 w-full p-2 border rounded text-red-600 flex items-center justify-center gap-2"
                >
                  <FiX /> Cancel Ride
                </button>
              </div>
            )}

            {rideStatus === "completed" && (
              <div className="mt-3">
                <p className="font-semibold">Delivery Completed</p>
                <div className="flex gap-2 mt-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <FiStar
                      key={s}
                      onClick={() => setRating(s)}
                      className={`cursor-pointer ${
                        rating >= s ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={resetForm}
                  className="mt-4 w-full p-2 border rounded"
                >
                  Book Another Ride
                </button>
              </div>
            )}

            {rideStatus === "cancelled" && (
              <div className="mt-3">
                <p className="text-red-500">Ride Cancelled</p>
                <button
                  onClick={resetForm}
                  className="mt-2 w-full p-2 border rounded"
                >
                  Start Again
                </button>
              </div>
            )}
          </div>
        </aside>
      </div>

      <footer className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Xpress
      </footer>
    </div>
  );
}
