import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/">
            <h3>SUNSET.</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item ms-2">
                <Link to="/experience">Experience</Link>
              </li>
              <li className="nav-item">
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
