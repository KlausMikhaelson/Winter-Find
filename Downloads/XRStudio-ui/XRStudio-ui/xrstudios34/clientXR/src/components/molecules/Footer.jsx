import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./footer.css";
import xrLogo from "../../img/xrstudio.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-left">
          <img className="footer-logo" src={xrLogo} alt="" />
          <h4>Get In Touch</h4>
          <p>
            We are working towards better and error free healthcare service with
            emerging and promising VR technology.
          </p>
        </div>
        <div className="footer-right">
          <p>Contact Us</p>
          <p>+91 8903772381</p>
          <p>machenideas@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
