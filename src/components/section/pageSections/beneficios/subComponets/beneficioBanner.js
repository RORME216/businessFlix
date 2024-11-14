import "./beneficioBannerStyle.css"
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function BeneficioBanner({icon, text, index}) {
    const { ref, inView } = useInView({threshold:0.8});
    const [hasHappen, setHasHappen] = useState(false);
    
    console.log("hasHappen :", hasHappen );

    useEffect( () => {
        if (inView && !hasHappen) {
            setHasHappen(true);
            console.log("ocorreu")
        }
        console.log(" inView:", inView);
        console.log("hasHappen :", hasHappen );
        console.log("hasHappen || inView:", hasHappen || inView);
        console.log("inView && !hasHappen:", inView && !hasHappen);
    },[inView])


    return (
        <motion.div className="beneficio-banner__container"
            key={index}
            ref={ref}
            initial={{ opacity:0 }}
            animate={{ opacity: (inView || hasHappen) ? 1 : 0 }}
            transition={{duration: 2, delay: index/3}}
        >
                {icon}
            <p className="beneficio-banner__text">{text}</p>
        </motion.div>
    );
}