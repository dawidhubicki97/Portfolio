import React from "react"
import { FaPhone, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-info">
        <div className="contact-phoneinfo">
          <FaPhone></FaPhone>111222333
        </div>
        <div className="contact-emailinfo">
          <FaEnvelope></FaEnvelope>dawid@gmail.com
        </div>
      </div>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div className="contact-name">
          <input name="name" placeholder="Imię"></input>
        </div>
        <div className="contact-email">
          <input name="email" placeholder="example@example.com"></input>
        </div>
        <div className="contact-message">
          <textarea name="message" placeholder="Wiadomość"></textarea>
        </div>
        <button>Wyślij</button>
      </form>
    </div>
  )
}
