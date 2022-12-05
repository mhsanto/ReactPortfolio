import React from "react";
import CV from "./CV";
import Socials from "./Socials";

import ME from "../../assets/me.jpg";
import "./header.css";
const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hi,I'm</h5>
        <h1>Mahmodul Hasan Santo</h1>
        <h5>FrontEnd Developer</h5>
        <CV />
        <Socials />
        <div className="me">
          <img src={ME} alt="My Image" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
