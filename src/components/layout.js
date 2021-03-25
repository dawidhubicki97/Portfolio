import * as React from "react"
import PropTypes from "prop-types"

import Img from "gatsby-image"
import "./layout.css"
import Navbar from "./Navbar"
import About from "./about"
import Home from "./home"
import Projects from "./projects"
import Contact from "./contact"

const Layout = (homeImageData, { children }) => {
  return (
    <>
      <div className="header">
        <Navbar></Navbar>
        <Img
          style={{ height: "100%", width: "100vw" }}
          imgStyle={{ objectFit: "fill" }}
          fluid={
            homeImageData.homeImageData.backgroundImage.childImageSharp.fluid
          }
          alt=""
        />
        <Home></Home>
      </div>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
