import React from "react"
import { FaCode, FaGraduationCap, FaAndroid } from "react-icons/fa"

export default function About() {
  return (
    <div className="about">
      <h1>O mnie</h1>
      <div className="about-underline"></div>
      <div className="about-container">
        <div className="about-box">
          <FaCode size={40}></FaCode>
          <h4>Web Developer</h4>
          <div className="about-underline"></div>
          <p>
            Tekst dlugiTekst dlugiTekst dlugiTekst dlugiTekst dlugiTekst
            dlugiTekst dlugiTekst dlugiTekst dlugiTekst dlugiTekst dlugiTekst
            dlugi
          </p>
        </div>
        <div className="about-box">
          <FaAndroid size={40}></FaAndroid>
          <h4>Android Developer</h4>
          <div className="about-underline"></div>
          <p>
            Tekst dlugiTekst dlugiTekst dlugiTekst dlugiTekst dlugiTekst
            dlugiTekst dlugiTekst dlugiTekst dlugiTekst dlugiTekst dlugiTekst
            dlugi
          </p>
        </div>
        <div className="about-box">
          <FaGraduationCap size={40}></FaGraduationCap>
          <h4>Student</h4>
          <div className="about-underline"></div>
          <p>
            Tekst dlugiTekst dlugiTekst dlugiTekst dlugiTekst dlugiTekst
            dlugiTekst dlugiTekst dlugiTekst dlugiTekst dlugiTekst dlugiTekst
            dlugi
          </p>
        </div>
      </div>
    </div>
  )
}
