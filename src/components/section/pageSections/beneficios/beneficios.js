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
            icon: <FaArrowRotateRight />,
            text: "Treinamento contínuo de colaboradores em quaisquer temas"
        }, 
        {
            icon: <IoShieldCheckmarkOutline />,
            text: "Redução do risco de escândalos e problemas com Compliance"
        }, 
        {
            icon: <FaAward />,
            text: "Branding positivo, mostrando compromisso com uma boa governança"
        },
        {
            icon: <FaRegPaperPlane  />,
            text: "Envio flexível, via WhatsApp, E-mail ou qualquer outro meio escolhido"
        },
        {
            icon: <FaMoneyBillTrendUp  />,
            text: "Benefícios Baixo investimento e alto retorno"
        },
        {
            icon: <FaRegHandshake  />,
            text: "Suporte em transições, implementações ou mudanças estruturais"
        },
        {
            icon: <IoWarningOutline />,
            text: "Temas pertinentes e atuais em vídeos inovadores"
        },
        {
            icon: <BsEmojiSunglasses />,
            text: "Adaptado para novas gerações"
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