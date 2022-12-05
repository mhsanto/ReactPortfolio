import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GrInstagram } from "react-icons/Gr";
import "./footer.css";
const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Santo
      </a>
      <ul className="perma__links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/">
          <BsFacebook />
        </a>
        <a href="https://github.com/mhsanto">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/mhsanto92/">
          <GrInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; MAHMODUL HASAN.All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
