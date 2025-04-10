import React from "react";
import {
  CheckCircle,
  Clock,
  Shield,
  ArrowRight,
  Users,
  BarChart as ChartBar,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <div
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          height: "800px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="container">
          <h1 className="display-3 fw-bold mb-4">
            Transform Attendance Management with AI
          </h1>
          <p className="lead mb-5">
            Experience the future of workforce management with our cutting-edge
            facial recognition system. Accurate, secure, and effortless.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <button
              className="btn btn-primary btn-lg d-flex align-items-center justify-content-center"
              onClick={() => navigate("/register")}>
              Register Yourself <ArrowRight className="ms-2" />
            </button>
            <button
              className="btn btn-outline-light btn-lg "
              onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-50 py-4">
          <div className="container">
            <div className="row text-white text-center">
              <div className="col-md-4">
                <h3 className="fw-bold">99.9%</h3>
                <p className="text-white-50">Recognition Accuracy</p>
              </div>
              <div className="col-md-4">
                <h3 className="fw-bold">500+</h3>
                <p className="text-white-50">Enterprise Clients</p>
              </div>
              <div className="col-md-4">
                <h3 className="fw-bold">1M+</h3>
                <p className="text-white-50">Daily Check-ins</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-5 bg-light">
        <div className="container text-center mb-5">
          <h2 className="fw-bold">Why Choose FaceTrack?</h2>
          <p className="lead text-muted">
            Our advanced facial recognition system brings unparalleled accuracy
            and efficiency to your workplace
          </p>
        </div>
        <div className="container">
          <div className="row g-4">
            {[
              {
                icon: <CheckCircle size={32} />,
                title: "Accurate Recognition",
                text: "State-of-the-art AI algorithms ensure precise identification with 99.9% accuracy in any lighting condition.",
              },
              {
                icon: <Clock size={32} />,
                title: "Time-Saving",
                text: "Eliminate manual attendance tracking and save up to 30 hours per month in administrative work.",
              },
              {
                icon: <Shield size={32} />,
                title: "Enterprise Security",
                text: "Bank-grade encryption and privacy protection ensure your data remains secure and compliant.",
              },
            ].map(({ icon, title, text }, i) => (
              <div className="col-md-4" key={i}>
                <div className="p-4 bg-white rounded shadow-sm h-100 text-center">
                  <div
                    className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: 64, height: 64 }}>
                    <div className="text-primary">{icon}</div>
                  </div>
                  <h5 className="fw-semibold mb-3">{title}</h5>
                  <p className="text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-5 bg-primary text-white">
        <div className="container text-center mb-5">
          <h2 className="fw-bold">Transform Your Workplace</h2>
          <p className="lead text-light">
            Experience the benefits of automated attendance tracking
          </p>
        </div>
        <div className="container">
          <div className="row g-4">
            {[
              {
                icon: <Users size={28} />,
                title: "Employee Management",
                text: "Track attendance, breaks, and overtime automatically",
              },
              {
                icon: <ChartBar size={28} />,
                title: "Analytics Dashboard",
                text: "Get real-time insights into workplace attendance patterns",
              },
              {
                icon: <Shield size={28} />,
                title: "Compliance Ready",
                text: "Meet regulatory requirements with detailed audit trails",
              },
            ].map(({ icon, title, text }, i) => (
              <div className="col-md-4 d-flex align-items-start" key={i}>
                <div className="me-3">{icon}</div>
                <div>
                  <h5>{title}</h5>
                  <p className="text-white-50">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="py-5 bg-gradient mt-3"
        style={{ backgroundColor: "#435df0" }}>
        <div className="container text-center text-white">
          <h2 className="fw-bold mb-3">Ready to Get Started?</h2>
          <p className="lead text-white-50 mb-4">
            Join thousands of companies already using FaceTrack to modernize
            their attendance management
          </p>
          <button className="btn btn-light btn-lg text-primary fw-semibold">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
}
