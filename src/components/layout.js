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
import Person from "./person"

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
        <Person></Person>
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
