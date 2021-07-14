import React from "react";
import "../../styles/footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-column">
        <div className="footer-lists small-container">
          <ul className="footer-list">
            <h1 className="footer-list-title">Website</h1>
            <li className="footer-list-item">
              <a href="/" className="footer-link">
                <p>Hive Nursery</p>
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/" className="footer-link">
                <p>Categories</p>
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/" className="footer-link">
                <p>Contacts</p>
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/" className="footer-link">
                <p>About</p>
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <h1 className="footer-list-title">Developers</h1>
            <li className="footer-list-item">
              <a href="https://www.linkedin.com/in/clinton-omondi-2b3827210/" className="footer-link">
                <p>Clinton Omondi</p>
              </a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.linkedin.com/in/mark-odhiambo-a58a65196" className="footer-link">
                <p>Mark Odhiambo</p>
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <h1 className="footer-list-title">Policies</h1>
            <li className="footer-list-item">
              <a href="/" className="footer-link">
                <p>Cookie Policy</p>
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/" className="footer-link"><p>Privacy Policy</p>

              </a>
            </li>
            <li className="footer-list-item">
              <a href="/" className="footer-link">
                <p>T & C's</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="copyright-stuff small-container-no-padding">
          <hr className="footer-hr" />
          <p className="copy">2021@Gaia-labs</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
