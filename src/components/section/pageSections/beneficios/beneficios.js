import "./beneficiosStyle.css"
import { FaArrowRotateRight, FaAward,
    FaRegPaperPlane, FaMoneyBillTrendUp,
    FaRegHandshake  } from "react-icons/fa6";
import { IoShieldCheckmarkOutline} from "react-icons/io5";
import { IoWarningOutline } from "react-icons/io5";
import { BsEmojiSunglasses } from "react-icons/bs";
import BeneficioBanner from "./subComponets/beneficioBanner";

export default function Beneficios() {

    const beneficios = [
        {
            icon: <FaArrowRotateRight className="beneficio-banner__icon" />,
            text: "Treinamento contínuo de colaboradores em quaisquer temas"
        }, 
        {
            icon: <IoShieldCheckmarkOutline className="beneficio-banner__icon" />,
            text: "Redução do risco de escândalos e problemas com Compliance"
        }, 
        {
            icon: <FaAward className="beneficio-banner__icon" />,
            text: "Branding positivo, mostrando compromisso com uma boa governança"
        },
        {
            icon: <FaRegPaperPlane  className="beneficio-banner__icon" />,
            text: "Envio flexível, via WhatsApp, E-mail ou qualquer outro meio escolhido"
        },
        {
            icon: <FaMoneyBillTrendUp  className="beneficio-banner__icon" />,
            text: "Benefícios Baixo investimento e alto retorno"
        },
        {
            icon: <FaRegHandshake  className="beneficio-banner__icon" />,
            text: "Suporte em transições, implementações ou mudanças estruturais"
        },
        {
            icon: <IoWarningOutline className="beneficio-banner__icon" />,
            text: "Temas pertinentes e atuais em vídeos inovadores"
        },
        {
            icon: <BsEmojiSunglasses className="beneficio-banner__icon" />,
            text: "Adaptado para novas gerações"
        },

    ]

    return(
        <section className="beneficios__container" id="beneficios">
            <h2 className="beneficios__title">Benefícios</h2>
            <div className="beneficios__content">
                {beneficios.map( beneficio => 
                    <BeneficioBanner icon={beneficio.icon}  text={beneficio.text} />
                )}
            </div>
        </section>
    );
}