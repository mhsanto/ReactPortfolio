import React from "react";
import "./services.css";
import { MdFileDownloadDone } from "react-icons/md";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <MdFileDownloadDone size={17} className="service__list-icon" />
              <p>User Experience Design (UX/Ux)</p>
            </li>
            <li>
              <MdFileDownloadDone size={17} className="service__list-icon" />
              <p>Desktop/Mobile Design</p>
            </li>

            <li>
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                Designer creates designs that make users happy by making their
                lives easier.
              </p>
            </li>
          </ul>
        </article>
        {/* end of ui/ux design */}
        <article className="service">
          <div className="service__head">
            <h3>Web Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                I can help you create a user interface that is intuitive, easy
                to use and appealing to the eye
              </p>
            </li>
            <li>
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                I can help you develop your website or app so that it's
                intuitive, easy to use and appealing to the eye.
              </p>
            </li>

            <li>
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                From the simple home page that greets your visitors to the
                intricacies of how your site will work on a mobile device, I am
                here to help you
              </p>
            </li>
            <li>
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                Setting up and maintaining a responsive website that looks great
                on any device or screen size
              </p>
            </li>
          </ul>
        </article>
        {/* end of WebDesign design */}
        <article className="service">
          <div className="service__head">
            <h3>Extras</h3>
          </div>
          <ul className="service__list">
            <li>
              <MdFileDownloadDone size={17} className="service__list-icon" />
              <p>Can type 73+ word per minute</p>
            </li>

            <li>
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                I have a passion for seeing the best in people and helping them
                to achieve their goals
              </p>
            </li>
            <li>
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                I am a self-starter who is passionate about learning new things,
                building relationships with people
              </p>
            </li>
            <li>
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                I like to be challenged, but I also thrive in a team environment
                where I can see my work come to life.
              </p>
            </li>
          </ul>
        </article>
        {/* end of content creation */}
      </div>
    </section>
  );
};

export default Services;
