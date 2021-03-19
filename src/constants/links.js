import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "home",
    url: "#home",
  },
  {
    id: 2,
    text: "o mnie",
    url: "#about",
  },
  {
    id: 3,
    text: "projekty",
    url: "#projects",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
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
