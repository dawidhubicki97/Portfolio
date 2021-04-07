import React from "react"
import Img from "gatsby-image"
import { FaGithub } from "react-icons/fa"
export default function Projects(homeImageData) {
  return (
    <div className="projects" id="projects">
      <div className="projects-row">
        <div
          className="projects-description projects-rightdirection"
          data-sal="slide-left"
          data-sal-duration="2000"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h2>Tytuł mojego projektu</h2>
          Treść projektu. Opis projektu Treść projektu. Opis projektu Treść
          projektu. Opis projektu Treść projektu. Opis projektu Treść projektu.
          Opis projektu Treść projektu. Opis projektu
          <br></br>
          <button className="projects-button">Live</button>
          <button className="projects-github">
            <FaGithub></FaGithub>
          </button>
        </div>
        <div className="projects-images">
          <div className="projects-backgroundblue" data-sal="fade"></div>
          <div
            data-sal="slide-left"
            data-sal-duration="2000"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            <Img
              className="projects-bigimagefirst"
              imgStyle={{ objectFit: "fill" }}
              fluid={
                homeImageData.homeImageData.homeImageData.firstProjectImage
                  .childImageSharp.fluid
              }
              alt=""
            />
            <Img
              className="projects-smallimagefirst"
              data-sal="slide-right"
              data-sal-duration="2000"
              data-sal-delay="300"
              data-sal-easing="ease"
              imgStyle={{ objectFit: "fill" }}
              fluid={
                homeImageData.homeImageData.homeImageData.firstProjectImage
                  .childImageSharp.fluid
              }
              alt=""
            ></Img>
          </div>
        </div>
      </div>
      <div className="projects-row projects-leftdirection">
        <div
          className="projects-description"
          data-sal="slide-left"
          data-sal-duration="2000"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h2>Tytuł mojego projektu</h2>
          Treść projektu. Opis projektu Treść projektu. Opis projektu Treść
          projektu. Opis projektu Treść projektu. Opis projektu Treść projektu.
          Opis projektu Treść projektu. Opis projektu
          <br></br>
          <button className="projects-button">Live</button>
          <button className="projects-github">
            <FaGithub></FaGithub>
          </button>
        </div>
        <div className="projects-images">
          <div className="projects-backgroundgreen" data-sal="fade"></div>
          <div
            data-sal="slide-left"
            data-sal-duration="2000"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            <Img
              className="projects-bigimagefirst"
              imgStyle={{ objectFit: "fill" }}
              fluid={
                homeImageData.homeImageData.homeImageData.firstProjectImage
                  .childImageSharp.fluid
              }
              alt=""
            />
            <Img
              className="projects-smallimagefirst"
              data-sal="slide-right"
              data-sal-duration="2000"
              data-sal-delay="300"
              data-sal-easing="ease"
              imgStyle={{ objectFit: "fill" }}
              fluid={
                homeImageData.homeImageData.homeImageData.firstProjectImage
                  .childImageSharp.fluid
              }
              alt=""
            ></Img>
          </div>
        </div>
      </div>
    </div>
  )
}

/*
    <div className="projects" id="projects">
      <h1>Projekty</h1>
      <div className="about-underline"></div>
      <div className="projects-container">
        <div class="card-container">
          <span class="pro">PROJECT</span>
          <img
            class="round"
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="user"
          />
          <h3>Social App</h3>
          <h6>WebApp</h6>
          <p>Portal społecznościowy stworzony w ReactJs</p>
          <div className="buttons">
            <button className="primary">Live</button>
            <button className="primary ghost">Github</button>
          </div>
          <div className="card-skills">
            <h6>Technologie</h6>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
        <div className="card-container">
          <span className="pro">PROJECT</span>
          <img
            className="round"
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="user"
          />
          <h3>Social App</h3>
          <h6>WebApp</h6>
          <p>Portal społecznościowy stworzony w ReactJs</p>
          <div cclassNamelass="buttons">
            <button className="primary">Live</button>
            <button className="primary ghost">Github</button>
          </div>
          <div className="card-skills">
            <h6>Technologie</h6>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
        <div className="card-container">
          <span className="pro">PROJECT</span>
          <img
            className="round"
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="user"
          />
          <h3>Social App</h3>
          <h6>WebApp</h6>
          <p>Portal społecznościowy stworzony w ReactJs</p>
          <div className="buttons">
            <button className="primary">Live</button>
            <button className="primary ghost">Github</button>
          </div>
          <div className="card-skills">
            <h6>Technologie</h6>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    */
