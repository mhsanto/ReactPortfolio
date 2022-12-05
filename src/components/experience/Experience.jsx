import React from "react";
import "./experience.css";
import { FaCheckCircle } from "react-icons/fa";
const Experience = () => {
  return (
    <section id="experience">
      <h5></h5>
      <h2> Expertise</h2>
      <div className="container container__experience">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCheckCircle className="experience_icons" />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience_icons" />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience_icons" />
              <h4>BootStrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience_icons" />
              <h4>Tailwind</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience_icons" />
              <h4>SCSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience_icons" />
              <h4>Javascript</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience_icons" />
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience_icons" />
              <h4>Shopify</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
