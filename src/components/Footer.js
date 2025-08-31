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

          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} style={{ marginRight: 8 }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} style={{ marginRight: 8 }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} style={{ marginRight: 8 }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} style={{ marginRight: 8 }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={30} style={{ marginRight: 8 }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} style={{ marginRight: 8 }} />
          </a>
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
