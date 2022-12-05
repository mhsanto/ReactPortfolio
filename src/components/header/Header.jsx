import React from "react";
import CV from "./CV";
import Socials from "./Socials";

import ME from "../../assets/me.jpg";
import "./header.css";
const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h3>Hi,I'm</h3>
        <h1>Mahmodul Hasan Santo</h1>
        <h3>FrontEnd Developer</h3>
        <CV />
        <Socials />
        <div className="me">
          <img src={ME} alt="My Image" />
        </div>
        <div className="scroller">
          <div class="scrolldown">
            <div class="chevrons">
              <div class="chevrondown"></div>
              <div class="chevrondown"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
