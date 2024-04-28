import React from "react";
import { Link } from "react-router-dom";
import Weather from "./Weather";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <Link className="navbar-brand fs-2 fst-italic text-white" to="/">
          TOOLSGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div style={{"display": "flex", "justify-content": "space-between"}}>
          <div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Signup">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Pricelist">
                Prices
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/registrationForm">
                BookNow
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/toolRegistration">
                Add Your Tools
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="http://127.0.0.1:5000/">
                Crops
              </Link>
            </li>
          </ul>
          </div>
          </div>
          <div>
          <div className="ml-auto">
            <Weather />
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
