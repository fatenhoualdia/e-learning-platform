import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-col">
        <h4>company</h4>
        <ul>
          <li>
            <a to="/">Home</a>
          </li>
          <li>
            <a to="/about">About us</a>
          </li>
          <li>
            <a to="/cours">Our courses</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>online education</h4>
        <ul>
          <li>
            <Link to="#">Marketing</Link>
          </li>
          <li>
            <Link to="#">Sience</Link>
          </li>
          <li>
            <Link to="#">Development</Link>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>online education</h4>
        <div>
          <ul>
            <li>
              <Link to="#">Math</Link>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <a href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </div>
      <div className="footer-col">
        <h4>follow us</h4>
        <div>
          <ul>
            <li>
              <ion-icon name="call-outline"></ion-icon>22490208
            </li>
            <li>
              <ion-icon name="at-outline"></ion-icon> fatenkhoualdia@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
