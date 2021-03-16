import React from "react"
import SocialLinks from "../constants/socialLinks"
export default function Home() {
  return (
    <div className="home">
      <article>
        <div className="home-title">Dawid Hubicki</div>
        <div className="home-description">Front-End Developer</div>
        <SocialLinks></SocialLinks>
      </article>
    </div>
  )
}
