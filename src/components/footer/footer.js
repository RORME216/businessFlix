import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import "./footerStyle.css"
import BusinessFlixLogo from "../navbar/logo/logo";

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-upper-part">
                <div className="infos">
                    <div className="icons-container">

                        <a><MdOutlineEmail className="icon-link" color="white"/></a>
                        <a><FaWhatsapp className="icon-link" color="white"/></a>
                    </div>
                    <div className="organization-infos">
                        <p className="info-text">R. Padre Teixeira, 2670 - Jardim Bethania</p>
                        <p className="info-text">São Carlos - SP, 13560-210</p>
                    </div>
                </div>
                <div className="Logo">
                    <BusinessFlixLogo />
                </div>
            </div>
            <div className="footer-lower-part">
                <p>&copy; 2024 Business Flix | Design por Eduardo Duarte</p>
            </div>
        </footer>
    );
}