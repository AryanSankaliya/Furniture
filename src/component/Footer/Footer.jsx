import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      {/* Main Footer */}
      <div className="footer">
        
        {/* Description */}
        <div className="footer-description">
          <h2 className="footer-logo">Furnino.</h2>
          <div className="footer-address">
            <pre>400 University Drive Suite 200 Coral</pre>
            <pre>Gables,</pre>
            <pre>FL 33134 USA</pre>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <p className="footer-links-title">Links</p>
          <Link to="/home">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Help */}
        <div className="footer-help">
          <p className="footer-help-title">Help</p>
          <Link to="/home">Payment Options</Link>
          <Link to="/home">Returns</Link>
          <Link to="/home">Privacy Policies</Link>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <p className="footer-newsletter-title">Newsletter</p>

          <div className="newsletter-box">
            <div className="newsletter-input">
              <input type="email" placeholder="Enter Your Email Address" />
            </div>

            <div className="newsletter-button">
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <p>2025 Funiro. All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;
