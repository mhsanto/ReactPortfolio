import React from "react";
import Resume from "../../assets/Santo-CV.pdf";
const CV = () => {
  return (
    <div className="resume">
      <a href={Resume}>
        <button>
          <span>CV</span>
        </button>
      </a>
      <a href="#contact">
        <button>
          <span>Contact</span>
        </button>
      </a>
    </div>
  );
};

export default CV;
