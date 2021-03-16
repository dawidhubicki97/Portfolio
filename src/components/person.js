import React from "react"
import SocialLinks from "../constants/socialLinks"

export default function Person() {
  return (
    <div class="person">
      <article>
        <div className="person-title">Dawid Hubicki</div>
        <div className="person-description">Front-End Developer</div>
        <SocialLinks></SocialLinks>
      </article>
    </div>
  )
}
