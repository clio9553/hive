import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navigation.css";
function Navigation() {
  return (
    <nav>
      <div className="nav-bar">
        {/* <div className="nav-image"></div> */}
        <h1 className="site-name">Hive</h1>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create-post" className="nav-link">
              Nursery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#about-us" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#contacts" className="nav-link">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
