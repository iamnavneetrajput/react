import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

  return (
    <>
      <div className="footer-basic">
        <footer>
          <div className="top">
            <button id="backToTopBtn" onClick={scrollToTop}>
              <i className="fas fa-fighter-jet"></i>
            </button>
          </div>
          <div className="social">
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTelegram} /></a>
          </div>
          <p className="copyright">N19 © 2023</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
