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
            text: "Branding positivo, mostrando compromisso com boa governança"
        },
        {
            icon: <FaRegPaperPlane  className="beneficio-banner__icon" />,
            text: "Envio flexível via WhatsApp, E-mail ou outro meio escolhido"
        },
        {
            icon: <FaMoneyBillTrendUp  className="beneficio-banner__icon" />,
            text: "Alto retorno com baixo investimento"
        },
        {
            icon: <FaRegHandshake  className="beneficio-banner__icon" />,
            text: "Suporte em transições, implementações ou mudanças estruturais"
        },
        {
            icon: <IoWarningOutline className="beneficio-banner__icon" />,
            text: "Temas pertinentes e atuais em formato inovador"
        },
        {
            icon: <BsEmojiSunglasses className="beneficio-banner__icon" />,
            text: "Adaptado às novas gerações"
        },

    ]

    return(
        <div className="beneficios__container">
            <h2 className="beneficios__title">Benefícios</h2>
            <div className="beneficios__content">
                {beneficios.map( beneficio => 
                    <BeneficioBanner icon={beneficio.icon}  text={beneficio.text} />
                )}
            </div>
        </div>
    );
}