import "./heroSectionStyle.css"
import { motion } from 'framer-motion'

export default function HeroSection() {
    return (
        <article className="hero-section__container" id="heroSection">
            
            <motion.img className="hero-section__background-image"
                src="/photos/heroSection/foto_01.jpg"
                alt="Empregados focados trabalhando em equipamentos eletrónicos"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration: 1}}
                />

            <motion.div className="hero-section__content"
                initial={{x:1800}}
                animate={{x:0}}
                transition={{duration: 2, delay:2}}
            >
                <motion.img className="hero-section_phone-frame"
                    src="/photos/heroSection/foto_celular.png"
                    alt="Smarth phone exibendo video educativo da empresa"
                    initial={{x:-3600}}
                    animate={{x:0}}
                    transition={{duration: 2, delay:2}}
                    />
                <h2 className="hero-section__header-call">COMUNICAÇÃO INOVADORA QUE TRANSFORMA</h2>
            </motion.div>
        </article>
    );
}