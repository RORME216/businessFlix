import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import "./footerStyle.css"
import BusinessFlixLogo from "../navbar/logo/logo";

export default function Footer() {

    const ano = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="footer-upper-part">
                <div className="contact">
                    <div className="icons-container">
                        <a href="mailto:robertoramonmendonca@gmail.com" target="_blank" rel="noopener noreferrer"><MdOutlineEmail className="icon-link" color="white"/></a>
                        <a href="https://wa.me/5516988041257" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="icon-link" color="white"/></a>
                       {/* <a href="mailto:email@provedor.com.br?subject=Assunto do email&cc=copia@provedor.com.br&bcc=copiaoculta@provedor.com.br&body=Conteúdo do email que será preenchido automaticamente">Enviar email</a> */}
                    </div>
                    <div className="Logo">
                        <BusinessFlixLogo />
                    </div>
                </div>
                <div className="organization-infos">
                    <p className="info-text">São Carlos - Capital da Tecnologia</p>
                </div>
            </div>
            <div className="footer-lower-part">
                <p>&copy; {ano} Business Flix. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}