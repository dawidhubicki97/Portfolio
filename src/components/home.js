import React from "react"
import SocialLinks from "../constants/socialLinks"
import Typewriter from "typewriter-effect"
export default function Home() {
  return (
    <div className="home" id="home">
      <article>
        <div className="home-title">Dawid Hubicki</div>
        <div className="home-typewriter">
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={typewriter => {
              typewriter
                .typeString("Front-End Developer")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Web Designer")
                .pauseFor(2000)
                .start()
            }}
          ></Typewriter>
        </div>
        <SocialLinks></SocialLinks>
      </article>
    </div>
  )
}
