import React from "react"
import Img from "gatsby-image"
import { FaGithub } from "react-icons/fa"
export default function Projects(homeImageData) {
  return (
    <div className="projects" id="projects">
      <div className="projects-row  projects-rightdirection">
        <div
          className="projects-description projects-resizedblue"
          data-sal="slide-left"
          data-sal-duration="2000"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h2>Social Media</h2>
          Aplikacja społecznościowa. Pozwala na dzielenie i komentowanie zdjęć
          swoich znajomych. Została stworzona z pomocą frameworka ReactJS oraz
          bazy danych firebase.
          <br></br>
          <a href="https://socialmediaappdh.netlify.app" target="_parent">
            <button className="projects-button">Live</button>
          </a>
          <a
            href="https://github.com/dawidhubicki97/SocialMediaReact"
            target="_parent"
          >
            <button className="projects-github">
              <FaGithub></FaGithub>
            </button>
          </a>
        </div>
        <div className="projects-images">
          <div className="projects-backgroundblue" data-sal="fade"></div>
          <div
            data-sal="slide-left"
            data-sal-duration="2000"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            {homeImageData.homeImageData.homeImageData && (
              <Img
                className="projects-bigimagefirst"
                imgStyle={{ objectFit: "fill" }}
                fluid={
                  homeImageData.homeImageData.homeImageData.firstProjectImage
                    .childImageSharp.fluid
                }
                alt=""
              />
            )}
            {homeImageData.homeImageData.homeImageData && (
              <Img
                className="projects-smallimagefirst"
                data-sal="slide-right"
                data-sal-duration="2000"
                data-sal-delay="300"
                data-sal-easing="ease"
                imgStyle={{ objectFit: "fill" }}
                fluid={
                  homeImageData.homeImageData.homeImageData
                    .firstProjectImageMobile.childImageSharp.fluid
                }
                alt=""
              ></Img>
            )}
          </div>
        </div>
      </div>
      <div className="projects-row projects-leftdirection">
        <div
          className="projects-description projects-resizedgreen"
          data-sal="slide-left"
          data-sal-duration="2000"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h2>Aplikacja firmy taksówkarskiej</h2>
          Aplikacja Mobilna która służy do zamawiania kursów pasażerskich.
          Wykorzystuje takie narzędzia jak Google API, Firebase oraz
          geolokalizację. Napisana w języku Kotlin.
          <br></br>
          <a href="https://github.com/dawidhubicki97/Taxi-App" target="_parent">
            <button className="projects-github">
              <FaGithub></FaGithub>
            </button>
          </a>
        </div>
        <div className="projects-images">
          <div className="projects-backgroundgreen" data-sal="fade"></div>
          <div
            data-sal="slide-left"
            data-sal-duration="2000"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            {homeImageData.homeImageData.homeImageData && (
              <Img
                className="projects-bigimagefirst"
                imgStyle={{ objectFit: "fill" }}
                fluid={
                  homeImageData.homeImageData.homeImageData.secondProjectImage
                    .childImageSharp.fluid
                }
                alt=""
              />
            )}
            {homeImageData.homeImageData.homeImageData && (
              <Img
                className="projects-smallimagefirst"
                data-sal="slide-right"
                data-sal-duration="2000"
                data-sal-delay="300"
                data-sal-easing="ease"
                imgStyle={{ objectFit: "fill" }}
                fluid={
                  homeImageData.homeImageData.homeImageData
                    .secondProjectImageMobile.childImageSharp.fluid
                }
                alt=""
              ></Img>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
