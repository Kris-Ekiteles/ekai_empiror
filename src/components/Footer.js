import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="media_icons">
          <p>connect with us</p>

          <a href="#" target="_blank" rel="noopener noreferrer"></a>
          <FaFacebook size={24} style={{ marginRight: 8 }} />
          <a href="#" target="_blank" rel="noopener noreferrer"></a>
          <FaTwitter size={24} style={{ marginRight: 8 }} />
          <a href="#" target="_blank" rel="noopener noreferrer"></a>
          <FaWhatsapp size={24} style={{ marginRight: 8 }} />
          <a href="#" target="_blank" rel="noopener noreferrer"></a>
          <FaYoutube size={24} style={{ marginRight: 8 }} />
          <a href="#" target="_blank" rel="noopener noreferrer"></a>
          <FaTiktok size={24} style={{ marginRight: 8 }} />
          <a href="#" target="_blank" rel="noopener noreferrer"></a>
          <FaLinkedin size={24} style={{ marginRight: 8 }} />
        </div>
        <div className="our_space">
          <p> visit our space</p>

          <p>we are located at ....</p>
        </div>
        <div className="newslater">
          <p>sign up for our newslatter</p>
          <input type="email" placeholder="enter your email address" />
          <button typeof="submit">submit</button>
        </div>
      
      </footer>
    </div>
  );
};

export default Footer;
