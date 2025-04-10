import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [Is_login, setIs_login] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIs_login(true);
    }
  }, []);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://2t4qcj-5000.csb.app/api/users/login",
        credentials
      );
      localStorage.setItem("token", res.data.token);
      navigate("/attendance");
    } catch (error) {
      console.error("Login Failed:", error.response?.data);
      setError(
        error.response?.data?.message ||
          "Login Failed. Please enter correct credentials."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div
        className="row w-100 shadow-lg rounded-4 overflow-hidden"
        style={{ maxWidth: "900px" }}>
        {/* Left Image Section */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="https://cdn.pixabay.com/photo/2024/08/02/18/55/men-8940493_640.jpg"
            alt="Login"
            className="img-fluid h-100 w-100 object-fit-cover"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Form Section */}
        <div className="col-12 col-md-6 bg-white p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold mb-2">Welcome Back</h2>
            <p className="text-muted">Please enter your credentials to login</p>
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control py-2"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                name="password"
                className="form-control py-2"
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
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
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>

            <div className="text-center">
              <p className="mb-0">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary fw-semibold">
                  Sign up
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

export default Login;
