import React, { useState } from "react"
import { FaPhone, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(
        () => alert("Wiadomość została wysłana!"),
        setFormState({
          ...formState,
          name: "",
          email: "",
          message: "",
        })
      )

      .catch(error => alert(error))

    e.preventDefault()
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: [e.target.value],
    })
    console.log(formState)
  }

  return (
    <div className="contact" id="contact">
      <div className="contact-info">
        <div className="contact-phoneinfo">
          <FaPhone></FaPhone> 517066407
        </div>
        <div className="contact-emailinfo">
          <FaEnvelope></FaEnvelope> daw8hub@gmail.com
        </div>
      </div>
      <div className="contact-form">
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="contact-name">
            <input
              name="name"
              className="form-input"
              placeholder="Imię"
              onChange={handleChange}
              value={formState.name}
            ></input>
          </div>
          <div className="contact-email">
            <input
              name="email"
              type="email"
              className="form-input"
              placeholder="email@email.com"
              onChange={handleChange}
              value={formState.email}
            ></input>
          </div>
          <div className="contact-message">
            <textarea
              rows="10"
              name="message"
              className="form-input"
              placeholder="Wiadomość"
              onChange={handleChange}
              value={formState.message}
            ></textarea>
          </div>
          <button className="share-button">Wyślij</button>
        </form>
      </div>
    </div>
  )
}
