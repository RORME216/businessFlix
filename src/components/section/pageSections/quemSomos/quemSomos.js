import "./quemSomosStyle.css"
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer'
import { quemSomosContent } from "../../../../data/quemSomos";

export default function QuemSomos() {
    const [hasHappen, setHasHappen] = useState(false);
    const {ref, inView} = useInView({threshold: 0.6});

    const screemWidth = window.innerWidth;

    useEffect( () => {
        if (inView && !hasHappen) {
            setHasHappen(true);
        }
        
        console.log(" inView:", inView);
        console.log("hasHappen :", hasHappen );
        console.log("hasHappen || inView:", hasHappen || inView);
        console.log("inView && !hasHappen:", inView && !hasHappen);
    },[inView])

    if (screemWidth >= 1025)
        return(
            <article className="quem-somos__container" id="quemSomos">
                <img className="quem-somos__image-background"
                    src="/photos/quemSomos/quemSomos.jpg"
                    alt="Imagem de fundo - dois operarios conversando"
                />
                <motion.div className="quem-somos__content-auxiliar-container" ref={ref}>
                    <motion.div className="quem-somos__content"
                        initial={{x: '1000'}}
                        animate={{x: (inView || hasHappen) ? 0 : 1000}}
                        transition={{duration: 2, type: 'spring', bounce: 0.3}}
                    >
                        {quemSomosContent}
                    </motion.div>
                </motion.div>
                
            </article>
    );

    else {
        return(
            <article className="quem-somos__container" id="quemSomos">
                <div className="quem-somos__content">
                    {quemSomosContent}
                </div>
            </article>
        );
    }
}