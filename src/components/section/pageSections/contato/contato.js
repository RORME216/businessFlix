import "./contatoStyle.css"
import { MdOutlineEmail } from "react-icons/md";
import {FaWhatsapp} from 'react-icons/fa'
import EmailButton from "./subcomponents/emailModal/emailButton";
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Contato() {
    const [hasHappen, setHasHappen] = useState(false);
    const { ref, inView } = useInView();

    useEffect( () => {
        if (inView && !hasHappen) setHasHappen(true)
    },[inView])


    return(
        <motion.article className="contato__container"
            ref={ref}
            initial={{y:200}}
            animate={{y: (inView || hasHappen) ? 0 : 200}}
            transition={{duration: 3, type: 'spring'}}
        >
            <div className="contato__content">
                <h2 className="contato__title">Se interessou?</h2>
                <p>Fale conosco por E-mail ou What´s App.</p>

                <div className="contato__buttons-area">
                    <a href="https://wa.me/5516988041257" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="contato__whats-app-button" />
                    </a>
                    
                    <EmailButton />
                </div>

            </div>
            <img className="contato__image" src="/photos/contato/img_contato.png" alt="Mulher olhando com interesse para computador" />
        </motion.article>
    );
}