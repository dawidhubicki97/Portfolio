import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useState, useEffect } from "react"
import Header from "./header"
import Img from "gatsby-image"
import "./layout.css"
import Navbar from "./Navbar"
import About from "./about"
import Home from "./home"

const Layout = (homeImageData, { children }) => {
  return (
    <>
      <div className="header">
        <Navbar></Navbar>
        <Img
          fluid={
            homeImageData.homeImageData.backgroundImage.childImageSharp.fluid
          }
          alt=""
        />
        <Home></Home>
      </div>
      <About></About>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
