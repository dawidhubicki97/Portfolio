import React, { useState, useEffect } from "react"
import { FaBars, Fatimes, FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import "../css/main.css"
const Navbar = () => {
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
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h3>Dawid Hubicki</h3>
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
