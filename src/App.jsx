import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import { AuthProvider, useAuth } from "./Components/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Navbar from "./Components/Navbar";

import Welcome from "./Components/Welcome";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import RoleSelection from "./Components/RoleSelection";

import Home from "./Components/Home";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Contacts from "./Components/Contacts";
import Services from "./Components/Services";
import Pricing from "./Components/Pricing";
import BookExpressDelivery from "./Components/BookExpressDelivery";
import RequestStoragePlan from "./Components/RequestStoragePlan";
import Consultation from "./Components/Consultation";
import Shipment from "./Components/Shipment";
import Pickup from "./Components/PickUp";
import BulkDelivery from "./Components/BulkDelivery";
import PaymentPage from "./Components/PaymentPage";
import Dashboard from "./Components/Dashboard";
import LogOut from "./Components/LogOut";
import RiderHome from "./Components/RiderHome";
import RiderRequests from "./Components/RiderRequests";
import RiderOngoing from "./Components/RiderOngoing";
import RiderCompleted from "./Components/RiderCompleted";
import RiderProfile from "./Components/RiderProfile";
import RiderLayout from "./Components/RiderLayout";
import RiderNavbar from "./Components/RiderNavbar";
import BookARider from "./Components/BookARider";

// Hide Navbar on certain pages
function LayoutWithNavbar({ children }) {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/role";

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}

function PublicRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null;

  if (isAuthenticated) {
    const userRole = localStorage.getItem("userRole");
    if (!userRole) return <Navigate to="/role" replace />;

    // Redirect based on role
    if (userRole === "business") return <Navigate to="/home" replace />;
    if (userRole === "rider") return <Navigate to="/rider-home" replace />;
  }

  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <LayoutWithNavbar>
          <Routes>
            {/* Welcome Page: only for first-time visitors */}
            <Route
              path="/"
              element={
                !localStorage.getItem("hasVisited") ? (
                  <Welcome />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            {/* Public Pages */}
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />

            {/* Role selection after login */}
            <Route
              path="/role"
              element={
                <ProtectedRoute allowNoRole>
                  <RoleSelection />
                </ProtectedRoute>
              }
            />

            {/* Protected Pages */}
            <Route
              path="/home"
              element={
                <ProtectedRoute allowedRoles={["business"]}>
                  <>
                    <Home />
                    <About />
                    <Testimonials />
                    <Footer />
                  </>
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contacts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/services"
              element={
                <ProtectedRoute>
                  <Services />
                </ProtectedRoute>
              }
            />
            <Route
              path="/pricing"
              element={
                <ProtectedRoute>
                  <Pricing />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Book"
              element={
                <ProtectedRoute>
                  <BookExpressDelivery />
                </ProtectedRoute>
              }
            />
            <Route
              path="/RequestStorage"
              element={
                <ProtectedRoute>
                  <RequestStoragePlan />
                </ProtectedRoute>
              }
            />
            <Route
              path="/consultation"
              element={
                <ProtectedRoute>
                  <Consultation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Shipment"
              element={
                <ProtectedRoute>
                  <Shipment />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Pickup"
              element={
                <ProtectedRoute>
                  <Pickup />
                </ProtectedRoute>
              }
            />
            <Route
              path="/BulkDelivery"
              element={
                <ProtectedRoute>
                  <BulkDelivery />
                </ProtectedRoute>
              }
            />
            <Route
              path="/pay"
              element={
                <ProtectedRoute>
                  <PaymentPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dash"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <ProtectedRoute>
                  <LogOut />
                </ProtectedRoute>
              }
            />
            <Route
              path="/book-a-ride"
              element={
                <ProtectedRoute>
                  <BookARider />
                </ProtectedRoute>
              }
            />
            <Route
              path="/rider-home"
              element={
                <RiderLayout>
                  <RiderHome />
                </RiderLayout>
              }
            />
            <Route
              path="/rider-requests"
              element={
                <RiderLayout>
                  <RiderRequests />
                </RiderLayout>
              }
            />
            <Route
              path="/rider-ongoing"
              element={
                <RiderLayout>
                  <RiderOngoing />
                </RiderLayout>
              }
            />
            <Route
              path="/rider-completed"
              element={
                <RiderLayout>
                  <RiderCompleted />
                </RiderLayout>
              }
            />
            <Route
              path="/rider-profile"
              element={
                <RiderLayout>
                  <RiderProfile />
                </RiderLayout>
              }
            />
          </Routes>
        </LayoutWithNavbar>
      </Router>
    </AuthProvider>
  );
}
