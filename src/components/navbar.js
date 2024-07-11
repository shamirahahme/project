// components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        K-NET
      </Link>
      <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
       
        <li>
          <Link to="/shop">Shop</Link>
        </li>
       
        <li>
          <Link to="/about">About</Link>
        </li>
        
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
