import React, { useState } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';


export default function ContactForm() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState({});


    const sendEmail = async(e) => {
      e.preventDefault();
      try {
          const sentMsg= {name, email , message}
          setLoading(true);
          if (progress > 100) {
            setProgress(0);
            } else {
            const diff = 30;
            setProgress(progress + diff);
          }
          const msgRes = await axios.post("/info/info", sentMsg);
          setResult({
            success: true,
            message: "Tu mensaje ha sido enviado exitosamente"
          });
          setProgress(100);
          setLoading(false);
      } catch (err) {
          setResult({
              success: false,
              message:"Tu mensaje no pudo ser enviado, intente de nuevo"
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
          <h2>Envíanos un mensaje</h2>
          {result.success &&  
          <Alert variant="success">
                <p>{result.message}</p>
          </Alert>}
          {result.success === false &&  
          <Alert variant="danger">
                <p>{result.message}</p>
          </Alert>}
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
            onChange = {e => setMessage(e.target.value)}
            required
          />
        </div>
        {loading && <LinearProgress className="ProgressContactBar" value={progress}/>}
        <button type="submit"  className="u-btn u-btn-submit u-button-style u-custom-font u-font-ubuntu u-palette-1-base u-btn-1 boton-enviar">ENVIAR</button>
      </form>
    )
}
