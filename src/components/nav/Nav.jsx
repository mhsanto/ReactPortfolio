import React, { useState } from "react";
import "./Nav.css";
import { AiTwotoneHome } from "react-icons/ai";
import { FcServices } from "react-icons/fc";
import { SiAboutdotme } from "react-icons/si";
import { FcOnlineSupport } from "react-icons/fc";
import { FaUserSecret } from "react-icons/fa";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        className={activeNav === "#" ? "active" : ""}
        href="#"
        onClick={() => {
          setActiveNav("#");
        }}
      >
        <AiTwotoneHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNav("#about");
        }}
        className={activeNav === "#about" ? "active" : ""}
      >
        <SiAboutdotme />
      </a>
      <a
        href="#experience"
        onClick={() => {
          setActiveNav("#experience");
        }}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FaUserSecret />
      </a>
      <a
        href="#services"
        onClick={() => {
          setActiveNav("#services");
        }}
        className={activeNav === "#services" ? "active" : ""}
      >
        <FcServices />
      </a>
      <a
        href="#portfolio"
        onClick={() => {
          setActiveNav("#portfolio");
        }}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <FcOnlineSupport />
      </a>
    </nav>
  );
};

export default Nav;
