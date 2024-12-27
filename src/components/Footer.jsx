import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaGithub,FaPhoneAlt } from 'react-icons/fa'; // Using react-icons for the icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Rajat Choudhary.All rights reserved.
        </p>
        <div className="footer-links">
          <p className="footer-phone"><FaPhoneAlt size={12}/> +918263944547</p>
          <div className="footer-icons">
            <a href="https://www.instagram.com/rajat_choudhary_1023/" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/rajat-choudhari-820499319/" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/RajatChoudhary1023" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
