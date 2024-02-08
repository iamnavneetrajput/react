import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBlog, faEnvelope, faBars, faTimes, faIndianRupeeSign, faGraduationCap, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">Your Logo</div>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className='menu-button'>
            {menuOpen ? <FontAwesomeIcon icon={faTimes} onClick={closeMenu} /> : <FontAwesomeIcon icon={faBars} />}
          </div>
        </div>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/"><FontAwesomeIcon icon={faHome} /> <span>Home</span></NavLink></li>
            <li><NavLink to="/course"><FontAwesomeIcon icon={faGraduationCap} /> <span>Courses</span></NavLink></li>
            <li><NavLink to="/subscription"><FontAwesomeIcon icon={faIndianRupeeSign} /> <span>Subscription</span></NavLink></li>
            <li><NavLink to="/blog"><FontAwesomeIcon icon={faBlog} /> <span>Blog</span></NavLink></li>
            <li><NavLink to="/contact"><FontAwesomeIcon icon={faEnvelope} /> <span>Contact</span></NavLink></li>
          </ul>
        </div>
        <div className="user">
          <li><NavLink to="/contact"><FontAwesomeIcon icon={faUser} /> <span></span></NavLink></li>
        </div>
      </div>

    </>
  );
};

export default Navbar;
