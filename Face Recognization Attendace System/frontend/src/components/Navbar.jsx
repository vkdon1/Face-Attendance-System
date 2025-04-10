import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [Is_login, setIs_login] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIs_login(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIs_login(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <Link className="navbar-brand" to="/">
        Face Attendance
      </Link>

      {/* Toggler button for mobile view */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          {Is_login ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/attendance">
                  Attendance
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/attendanceRecord">
                  Attendance Records
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-secondary border-0"
                  onClick={logout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
