import { graphql } from "gatsby"
import React, { useState, useEffect, useRef } from "react"
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

  const menuRef = useRef()
  useEffect(() => {
    document.addEventListener("mousedown", event => {
      if (!menuRef.current.contains(event.target)) {
        setClick(false)
      }
    })
  }, [])
  const showMenu = () => {
    setClick(!click)
  }
  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <nav className={scroll ? "navbar active" : "navbar"} ref={menuRef}>
      <div className="nav-center">
        <div className="nav-header">
          <button type="button" className="toggle-btn" onClick={showMenu}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        {click ? (
          <PageLinks styleClass="nav-links nav-display"></PageLinks>
        ) : (
          <PageLinks styleClass="nav-links"></PageLinks>
        )}
      </div>
    </nav>
  )
}

export default Navbar
