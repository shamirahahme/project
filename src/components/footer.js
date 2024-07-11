import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section social-media">
          <ul className="social-icons">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-tiktok"></i></a></li>
            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
            <li><a href="#"><i className="fab fa-snapchat-ghost"></i></a></li>
            <p>All at Kojjashraf</p>
          </ul>
        </div>
        <div className="footer-section contact-info">
          <p>Find us @ Namirembe road,</p>
          <p>Tel: <a href="tel +256 709717910:"> +256 709717910</a> (available 24/7 online)</p>
          
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} K-net. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
