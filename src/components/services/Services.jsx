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
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernremque?
              </p>
            </li>
            <li>
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernremque?
              </p>
            </li>

            <li>
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernremque?
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernremque?
              </p>
            </li>
            <li>
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernremque?
              </p>
            </li>
            <li>
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernremque?
              </p>
            </li>
            <li>
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernremque?
              </p>
            </li>
            <li>
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernremque?
              </p>
            </li>
          </ul>
        </article>
        {/* end of WebDesign design */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernremque?
              </p>
            </li>

            <li>
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernremque?
              </p>
            </li>
            <li>
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernremque?
              </p>
            </li>
            <li>
              <MdFileDownloadDone className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernremque?
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
