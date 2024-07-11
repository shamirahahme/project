import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.jpg';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-help">
          Need help placing an order? 
          <a href="tel:0709744874">
            <i className="fas fa-phone"></i> +256 709717910
          </a>
        </div>
      </div>
      <div className="navbar-bottom">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="K-NET" />
        </Link>
        <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/login">Login</Link></li>
          
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
