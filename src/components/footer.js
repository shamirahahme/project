import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+256758005360">+256 709717910</a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="kojjashraf@gmail.com">kojjashraf@gmail.com</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                Namirembe road, Kampala, Uganda
              </li>
            </ul>
          </div>
         
          <div className="col-md-4">
            <h4>Opening Hours</h4>
            <ul className="list-unstyled">
              <li>Mon-Fri: 8:30am - 7:00pm</li>
              <li>Saturday: 9:00am - 7:00pm</li>
              <li>Sunday: 12:00pm - 2:30pm (Only deliveries)</li>
            </ul>
            <h4>Follow Us</h4>
            <ul className="list-inline social-icons">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                  <p>kojjashraf</p>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                  <p>kojjashraf</p>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                  <p>kojjashraf</p>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-tiktok"></i>
                  <p>kojjashraf</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright text-center">
        <p>
          &copy; {new Date().getFullYear()} Gadget Craze. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;