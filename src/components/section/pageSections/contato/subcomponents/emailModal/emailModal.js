import "./emailModalStyle.css";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function EmailModal({ setIsOpenEmailModal }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [response, setResponse] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function onClose() {
    setIsOpenEmailModal(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log("inicio")
      const response = await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), 
      });
      console.log("meio")
      if (response.ok) {
        setResponse("Email enviado com sucesso!");
      } else {
        setResponse("Erro ao enviar o email");
      }
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
    }
  }


  return (
    <div className="email-modal__background" onClick={onClose}>
      <div className="email-modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="email-modal__superior-area">
          <h3 className="email-modal__title">Contato</h3>
          <IoClose className="email-modal__close-icon" onClick={onClose} />
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="email-modal__form">
          <label>Nome Completo:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Assunto:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <label>Mensagem:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {response && <p>{response}</p>}

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
