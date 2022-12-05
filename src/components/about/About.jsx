import React from "react";
import Me from "../../assets/me.jpg";
import { FaPeopleCarry } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { TbLanguageHiragana } from "react-icons/tb";

import "./about.css";
const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__img">
            <img src={Me} alt="My image" className="img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <article>
                <FaPeopleCarry className="about_icons" />

                <h3>Expericence</h3>
                <h5>2+ year working</h5>
              </article>
            </div>
            <div className="about__card">
              <article>
                <TbLanguageHiragana className="about_icons" />
                <h3>Language</h3>
                <h5>English,Urdu</h5>
                <h5>Bangla,Hindi</h5>
              </article>
            </div>
            <div className="about__card">
              <article>
                <GoProject className="about_icons" />
                <h3>Projects</h3>
                <h5>15+ projects</h5>
              </article>
            </div>
          </div>
          <p>
            I am a passionate designer based in Dhaka, Bangladesh. I am
            enthusiastic about learning, working hard and solving problems with
            a clean and functional design.
          </p>
          <a href="#footer">
            <button>
              <span>More</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
