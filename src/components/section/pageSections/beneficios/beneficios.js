import "./beneficiosStyle.css"
import BeneficioBanner from "./subComponets/beneficioBanner";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { beneficios } from "../../../../data/beneficios";
export default function Beneficios() {
    const { ref, inView } = useInView({threshold:0.01});
    const [hasHappen, setHasHappen] = useState(false);

    useEffect( () => {
        if (inView && !hasHappen) {
            setHasHappen(true);
            console.log("ocorreu")
        }
    },[inView])
    

    return(
        <div className="beneficios__container">
            <h2 className="beneficios__title">CONTE COM A BUSINESSFLIX PARA</h2>
            <div className="beneficios__content" ref={ref} >
                {beneficios.map( (beneficio, index) => 
                    <BeneficioBanner icon={beneficio.icon}  text={beneficio.text} index={index}
                    inView={inView} hasHappen={hasHappen}/>
                )}
            </div>
        </div>
    );
}