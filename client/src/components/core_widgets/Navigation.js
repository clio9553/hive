import React from "react";
import { SiHive } from "react-icons/si";
import { Link } from "react-router-dom";
import "../../styles/navigation.css";
function Navigation({ refs: { aboutRef, categoryRef }, signOutCallback }) {
  return (
    <nav>
      <div className="nav-bar">
        {/* <div className="nav-image"></div> */}
        <div className="nav-left">
          <SiHive className="site-icon" fontSize={30} />
          <div className="site-name nav">Invesite</div>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <div to="" className="nav-link" onClick={() => {
              categoryRef?.current?.scrollIntoView({ behavior: "smooth" })
            }}>
              Categories
            </div>
          </li>
          <li className="nav-item">
            <Link to="/create-post" className="nav-link">
              Nursery
            </Link>
          </li>
          <li className="nav-item">
            <div to="#about-us" className="nav-link" onClick={() => {
              aboutRef?.current?.scrollIntoView({ behavior: "smooth" })
            }}>
              About
            </div>
          </li>
          <li className="nav-item">
            <div to="#contacts" className="nav-link" onClick={() => signOutCallback()}>
              Sign Out
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
