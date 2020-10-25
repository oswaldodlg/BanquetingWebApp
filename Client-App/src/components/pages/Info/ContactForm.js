import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message, setMessage] = useState("")
    const [result, setResult] = useState(null)

    const sendEmail = async(e) => {
        e.preventDefault();
        try {
            const sentMsg= {name, email ,message}
            const msgRes = await axios.post("/info", sentMsg);
            setResult(msgRes.data);
            setName("");
            setEmail("");
            setMessage("")
        } catch (err) {
            setResult({
                success: false,
                message:"Something went wrong. Try again later"
            })
        }
    }

    return (
        <form
        className="u-block-f8dd-19 u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
        source="custom"
        onSubmit = {sendEmail}
      >
        {/* hidden inputs for siteId and pageId */}
        <div className="u-form-group u-form-name u-form-group-1">
          <label
            htmlFor="name-c08e"
            className="u-form-control-hidden u-label"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Nombre"
            id="name-c08e"
            name="name"
            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
            required
            onChange = {e => setName(e.target.value)}
            value = {name}
          />
        </div>
        {/* always visible */}
        <div className="u-form-email u-form-group u-form-group-2">
          <label
            htmlFor="email-c08e"
            className="u-form-control-hidden u-label"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Correo Electrónico"
            id="email-c08e"
            name="email"
            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
            required
            onChange = {e => setEmail(e.target.value)}
            value= {email}
          />
        </div>
        <div className="u-form-group u-form-message u-form-group-3">
          <label
            htmlFor="message-c08e"
            className="u-form-control-hidden u-label"
          >
            Message
          </label>
          <textarea
            placeholder="Escribe tu Mensaje"
            rows={4}
            cols={50}
            id="message-c08e"
            name="message"
            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
            required
            onChange = {e => setMessage(e.target.value)}
            value = {message}
          />
        </div>
        <button type="submit"  className="u-btn u-btn-submit u-button-style u-custom-font u-font-ubuntu u-palette-1-base u-btn-1">ENVIAR</button>
        <div className="u-form-send-message u-form-send-success">
          {" "}
          Thank you! Your message has been sent.{" "}
        </div>
        <div className="u-form-send-error u-form-send-message">
          {" "}
          Unable to send your message. Please fix errors then
          try again.{" "}
        </div>
        <input
          type="hidden"
          defaultValue
          name="recaptchaResponse"
        />
      </form>
    )
}
