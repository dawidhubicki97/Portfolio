import { graphql } from "gatsby"
import React, { useState, useEffect } from "react"
import { FaBars, Fatimes, FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import Img from "gatsby-image"
import "../css/main.css"

const Navbar = homeImageData => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <nav className={scroll ? "navbar active" : "navbar"}>
      <div className="nav-center">
        <div className="nav-header">
          <h3>Portfolio</h3>
          <button type="button" className="toggle-btn">
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
