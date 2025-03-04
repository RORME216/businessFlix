import { FaArrowRotateRight, FaAward,
    FaRegPaperPlane, FaMoneyBillTrendUp,
    FaRegHandshake  } from "react-icons/fa6";
import { IoShieldCheckmarkOutline} from "react-icons/io5";
import { BsEmojiSunglasses } from "react-icons/bs";
import { FaRegLaughBeam } from "react-icons/fa";


export const beneficios = [
        {
            icon: <FaArrowRotateRight className="beneficio-banner__icon" />,
            text: "Treinar colaboradores de forma contínua com nossa metodologia exclusiva"
        },
        {
            icon: <BsEmojiSunglasses className="beneficio-banner__icon" />,
            text: "Estar adaptado para todas as gerações"
        },
        {
            icon: <FaRegPaperPlane  className="beneficio-banner__icon" />,
            text: "Engajar colaboradores nossos vídeos disruptivos"
        },
        {
            icon: <FaRegLaughBeam className="beneficio-banner__icon" />,
            text: "Melhorar comportamentos e ambientes"
        }, 
        {
            icon: <IoShieldCheckmarkOutline className="beneficio-banner__icon" />,
            text: "Reduzir risco de escândalos e problemas com Compliance"
        },
        {
            icon: <FaRegHandshake  className="beneficio-banner__icon" />,
            text: "Obter suporte em transições, implementações e mudanças estruturais"
        },
        {
            icon: <FaMoneyBillTrendUp  className="beneficio-banner__icon" />,
            text: "Ter um alto retorno com baixo investimento"
        }, 
        {
            icon: <FaAward className="beneficio-banner__icon" />,
            text: "Promover um branding positivo da sua marca, mostrando compromisso com uma boa governança"
        }

    ]