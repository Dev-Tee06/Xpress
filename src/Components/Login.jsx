import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can validate credentials (API call or hardcoded for demo)
    if (email && password) {
      login(email); // store email as userName
      navigate("/role"); // navigate to Role Selection page
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f9ff] p-6 ">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md border-t-4 border-[#0369a1]">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-black">X</span>
          <span className="text-[#0369a1]">press</span> Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#0369a1] focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#0369a1] focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0369a1] text-white py-3 rounded-lg text-lg font-medium hover:bg-[#025985] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
