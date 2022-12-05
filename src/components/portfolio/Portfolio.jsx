import React from "react";
import "./portfolio.css";
import img1 from "../../assets/ecommerce.png";
import img2 from "../../assets/portfolio.png";
import img3 from "../../assets/project.png";
import img4 from "../../assets/socialSite.png";
import img5 from "../../assets/hunt.png";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Projects I Completed</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="project 1" />
          </div>
          <h3>Concept E-Commerce Site using Bootstrap 5</h3>
          <div className="portfolio_items-cta">
            <a
              href="https://github.com/mhsanto/E-commerce-website"
              target="_blank"
            >
              <button>
                <span>View Code</span>
              </button>
            </a>
            <a
              href="https://mhsanto.github.io/E-commerce-website/"
              target="_blank"
            >
              <button>
                <span>Live Demo</span>
              </button>
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img2} alt="project 1" loading="lazy" />
          </div>
          <h3>Responsive Portfolio Site with HTML And CSS</h3>
          <div className="portfolio_items-cta">
            <a
              href="https://github.com/mhsanto/portFolioTesting"
              target="_blank"
            >
              <button>
                <span>View Code</span>
              </button>
            </a>

            <a
              href="https://mhsanto.github.io/portFolioTesting/"
              target="_blank"
            >
              <button>
                <span>Live Demo</span>
              </button>
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img3} alt="project 1" loading="lazy" />
          </div>
          <h3>Responsive Basic HTML And CSS Website</h3>
          <div className="portfolio_items-cta">
            <a href="https://github.com/mhsanto/2ndpage" target="_blank">
              <button>
                <span>View Code</span>
              </button>
            </a>
            <a href="https://mhsanto.github.io/2ndpage/" target="_blank">
              <button>
                <span>Live Demo</span>
              </button>
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img4} alt="project 1" loading="lazy" />
          </div>
          <h3>Social Media Demo Using HTML,CSS,Javascript</h3>
          <div className="portfolio_items-cta">
            <a href="https://github.com/mhsanto/mySocialMedia" target="_blank">
              <button>
                <span>View Code</span>
              </button>
            </a>
            <a href="https://mhsanto.github.io/mySocialMedia/" target="_blank">
              <button>
                <span>Live Demo</span>
              </button>
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img5} alt="project 1" loading="lazy" />
          </div>
          <h3>PSD TO HTML Converted Hunt Portfolio Site </h3>
          <div className="portfolio_items-cta">
            <a
              href="https://github.com/Sajjadul011/Hunt-Potfolio"
              target="_blank"
            >
              <button>
                <span>View Code</span>
              </button>
            </a>
            <a
              href="https://sajjadul011.github.io/Hunt-Potfolio/"
              target="_blank"
            >
              <button>
                <span>Live Demo</span>
              </button>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
