import React from "react"
import { FaPhone, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-info">
        <div className="contact-phoneinfo">
          <FaPhone></FaPhone> 111222333
        </div>
        <div className="contact-emailinfo">
          <FaEnvelope></FaEnvelope> dawid@gmail.com
        </div>
      </div>
      <div className="contact-form">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div className="contact-name">
            <input
              name="name"
              className="form-input"
              placeholder="Imię"
            ></input>
          </div>
          <div className="contact-email">
            <input
              name="email"
              className="form-input"
              placeholder="example@example.com"
            ></input>
          </div>
          <div className="contact-message">
            <textarea
              rows="10"
              name="message"
              className="form-input"
              placeholder="Wiadomość"
            ></textarea>
          </div>
          <button className="share-button">Wyślij</button>
        </form>
      </div>
    </div>
  )
}
