import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

const Socials = () => {
  return (
    <div className="social__links">
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
  );
};

export default Socials;
