import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <span className="nav-logo-text" style={{ color: "#007dfe", fontSize: "30px", fontWeight: "bold" }}>Moneyfy</span>
        </div>
        <div>
          <p className="footer-text" style={{ color: '#333', fontSize: '16px', lineHeight: '1.5', textDecoration: 'none' }}>
            Moneyfy is a powerful expense tracker that helps you stay on top of your finances.<br/> With Moneyfy, you can easily track your income and expenses, set budgets, and<br/> analyze your spending habits.
          </p>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <h3>Categories</h3>
          <span>Home</span>
          <span>Features</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <div className="footer-section-columns">
          <h3>Contact</h3>
          <span>Phone no: +91 9646156723</span>
          <span>Email id: tanishq2384.be23@chitkara.edu.in</span>
          <span>Location: Chitkara University, Rajpura</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
