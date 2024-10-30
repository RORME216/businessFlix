import "./contatoStyle.css"
import { MdOutlineEmail } from "react-icons/md";
import {FaWhatsapp} from 'react-icons/fa'
{/*import EmailButton from "./subcomponents/emailModal/emailButton";*/}

export default function Contato() {
    return(
        <article className="contato__container">
            <div className="contato__content">
                <h2 className="contato__title">Se interessou?</h2>
                <p>Fale conosco por E-mail ou What´s App.</p>

                <div className="contato__buttons-area">
                    <a href="https://wa.me/5516988041257" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="contato__whats-app-button" />
                    </a>
                    <a href="mailto:robertoramonmendonca@gmail.com" 
                    target="_blank" rel="noopener noreferrer">
                        <MdOutlineEmail className="contato__email-button"/>
                    </a>
                    {/*<EmailButton />*/}
                </div>

            </div>
            <img className="contato__image" src="/photos/contato/img_contato.png" alt="Mulher olhando com interesse para computador" />
        </article>
    );
}