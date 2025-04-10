"use client";

import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    aadhaarNumber: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(false);

    try {
      await axios.post(
        "https://2t4qcj-5000.csb.app/api/users/register",
        formData
      );
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        aadhaarNumber: "",
        password: "",
      });
    } catch (error) {
      console.error("Registration Failed:", error.response?.data);
      setError(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light mt-3">
      <div
        className="row w-100 shadow-lg rounded-4 overflow-hidden"
        style={{ maxWidth: "950px" }}>
        {/* Left Image */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="https://cdn.pixabay.com/photo/2020/04/16/06/12/time-and-attendance-5049295_640.jpg"
            alt="Register"
            className="img-fluid h-100 w-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Form */}
        <div className="col-12 col-md-6 bg-white p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold mb-2">Create Account</h2>
            <p className="text-muted">
              Please fill in your details to register
            </p>
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert-success" role="alert">
              Registration Successful! You can now login to your account.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control py-2"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control py-2"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Aadhaar Number</label>
              <input
                type="text"
                name="aadhaarNumber"
                className="form-control py-2"
                placeholder="Enter your 12-digit Aadhaar number"
                value={formData.aadhaarNumber}
                onChange={handleChange}
                required
                pattern="[0-9]{12}"
                title="Aadhaar number must be 12 digits"
              />
              <small className="text-muted">
                Please enter a valid 12-digit Aadhaar number
              </small>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                name="password"
                className="form-control py-2"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
              />
              <small className="text-muted">
                Password must be at least 6 characters long
              </small>
            </div>

            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="termsCheck"
                required
              />
              <label className="form-check-label" htmlFor="termsCheck">
                I agree to the{" "}
                <a href="#" className="text-primary">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              className="btn btn-primary w-100 py-2 fw-semibold mb-3"
              disabled={isLoading}>
              {isLoading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"></span>
                  Registering...
                </>
              ) : (
                "Register"
              )}
            </button>

            <div className="text-center">
              <p className="mb-0">
                Already have an account?{" "}
                <Link to="/login" className="text-primary fw-semibold">
                  Login
                </Link>
              </p>
            </div>
          </form>

          <div className="text-center mt-4 text-muted small">
            <p>© 2025 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
