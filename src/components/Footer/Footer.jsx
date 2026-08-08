import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>LUNERA</h2>

          <p>
            Everything you need, all in one place.
            Discover products made to fit your style
            and everyday life.
          </p>

          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/collection">Collections</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Customer Service */}
        <div className="footer-column">
          <h3>Customer Service</h3>

          <a href="#">My Account</a>
          <a href="#">Orders</a>
          <a href="#">Wishlist</a>
          <a href="#">Shipping & Delivery</a>
          <a href="#">Returns & Refunds</a>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Stay Connected</h3>

          <p>
            Subscribe to our newsletter and get the
            latest updates and exclusive offers.
          </p>

          <div className="newsletter-box">
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 LUNERA. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
