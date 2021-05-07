import * as React from "react"
import PropTypes from "prop-types"

import Img from "gatsby-image"
import "./layout.css"
import Navbar from "./navbar"
import About from "./about"
import Home from "./home"
import Projects from "./projects"
import Contact from "./contact"

const Layout = (homeImageData, { children }) => {
  return (
    <>
      <div className="header">
        <Navbar></Navbar>

        <Home></Home>
      </div>
      <About></About>
      <Projects homeImageData={homeImageData}></Projects>
      <Contact></Contact>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
