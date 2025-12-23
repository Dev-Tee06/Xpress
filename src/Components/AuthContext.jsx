// src/Components/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedAuth = localStorage.getItem("xpress_auth");
    const expiry = localStorage.getItem("auth_expiry");

    if (storedAuth === "true" && expiry && Date.now() < Number(expiry)) {
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("xpress_auth");
      localStorage.removeItem("auth_expiry");
    }
    setLoading(false);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    const expiryTime = Date.now() + 5 * 60 * 1000; // expire in 5 min
    localStorage.setItem("xpress_auth", "true");
    localStorage.setItem("auth_expiry", expiryTime);
  };

  const logout = () => {
    setIsAuthenticated(false);
    // Remove only relevant keys
    localStorage.removeItem("userRole"); // remove role
    localStorage.removeItem("xpress_auth"); // remove login flag
    localStorage.removeItem("auth_expiry"); // remove expiry
    localStorage.removeItem("hasVisited"); // optional: reset welcome page
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
