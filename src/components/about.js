import React from "react"
import { FaCode, FaGraduationCap, FaAndroid } from "react-icons/fa"

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-header">
        <h1>O mnie</h1>
      </div>
      <div className="about-underline"></div>
      <div className="about-container">
        <div className="about-box">
          <div className="about-boxHeader">
            <FaCode size={40}></FaCode>
            <h4>Web Developer</h4>
            <div className="about-underline"></div>
          </div>
          Moim głównym zainteresowaniem są aplikacje internetowe. Zajmuje się
          ich tworzeniem oraz projektowaniem. Technologie które zazwyczaj
          wykorzystuje to
          <b> html & css, javascript, react, gatsby, git, graphql, firebase</b>.
        </div>
        <div className="about-box">
          <div className="about-boxHeader">
            <FaAndroid size={40}></FaAndroid>

            <h4>Android Developer</h4>
            <div className="about-underline"></div>
          </div>
          Uczę się również tworzenia aplikacji mobilnych na system Android.
          Technologię które zazwyczaj wykorzstuje to:
          <b> Kotlin, Java, Firebase.</b>
        </div>
        <div className="about-box">
          <div className="about-boxHeader">
            <FaGraduationCap size={40}></FaGraduationCap>
            <h4>Student</h4>
            <div className="about-underline"></div>
          </div>
          Jestem studentem na studiach magisterskich na kierunku Informatyka.
          Uzyskałem stopień inżyniera na kierunku informatyka na Uniwersytecie
          Rzeszowskim (specjalizacja aplikacje internetowe).
        </div>
      </div>
    </div>
  )
}
