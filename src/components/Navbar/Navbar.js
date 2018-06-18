import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      <img src="./assets/images/nytimes.png" />
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
              window.location.pathname === "/search"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/results"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/results" className="nav-link">
            Results
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/saved"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/saved" className="nav-link">
            Saved
          </Link>
        </li>
        {/* <li className="ml-auto">
          <img src="./assets/images/nytimes.png" />
        </li> */}
      </ul>
      {/* <div>
        <img className="d-flex justify-content-end" src="./assets/images/nytimes.png" />
      </div> */}

    </div>
  </nav>
);

export default Navbar;
