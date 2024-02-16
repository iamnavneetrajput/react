import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
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
        <div className="logo"><Link to="/">N19</Link></div>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className='menu-button'>
            {menuOpen ? <FontAwesomeIcon icon={faTimes} onClick={closeMenu} /> : <FontAwesomeIcon icon={faBars} />}
          </div>
        </div>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/"><FontAwesomeIcon icon={faHome} /> <span className='nav-text'>Home</span></NavLink></li>
            <li><NavLink to="/course"><FontAwesomeIcon icon={faGraduationCap} /> <span className='nav-text'>Courses</span></NavLink></li>
            <li><NavLink to="/subscription"><FontAwesomeIcon icon={faIndianRupeeSign} /> <span className='nav-text'>Subscription</span></NavLink></li>
            <li><NavLink to="/blog"><FontAwesomeIcon icon={faBlog} /> <span className='nav-text'>Blog</span></NavLink></li>
            <li><NavLink to="/contact"><FontAwesomeIcon icon={faEnvelope} /> <span className='nav-text'>Contact</span></NavLink></li>
          </ul>
        </div>
        <div className="user">
          <li><NavLink to="/user"><FontAwesomeIcon icon={faUser} /> <span></span></NavLink></li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
