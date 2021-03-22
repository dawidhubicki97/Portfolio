import React from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

const data = [
  {
    id: 1,
    text: "Home",
    url: "#home",
  },
  {
    id: 2,
    text: "O mnie",
    url: "#about",
  },
  {
    id: 3,
    text: "Projekty",
    url: "#projects",
  },
  {
    id: 4,
    text: "Kontakt",
    url: "#contact",
  },
]

const tempLinks = data.map(link => {
  return (
    <li class="nav-link" onClick={() => scrollTo(link.url)} key={link.id}>
      {link.text}
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
