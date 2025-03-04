import "./heroSectionStyle.css"
import { motion } from 'framer-motion'

export default function HeroSection() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 1025)
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

    return (
        <article className="hero-section__container" id="heroSection">
            
            <div className="hero-section__background">

                <motion.div className="hero-section__content"
                    initial={{x:3500}}
                    animate={{x:0}}
                    transition={{duration: 1.5}}
                >
                    <motion.img className="hero-section_phone-frame"
                        src="/photos/heroSection/foto_celular.png"
                        alt="Smarth phone exibendo video educativo da empresa"
                        initial={{x:-5000}}
                        animate={{x:0}}
                        transition={{duration: 1.5}}
                        />
                    
                        <div className="hero-section__heards-container"> 
                            <h2 className="hero-section__header-call">TRANSFORMAMOS A CULTURA ORGANIZACIONAL DA SUA EMPRESA COM NOSSA METODOLOGIA DE TREINAMENTOS EXCLUSIVA E DISRUPTIVA</h2>
                            <h2 className="hero-section__sub-header-call">Uma mistura de Porta dos Fundos com Tik Tok em situações do dia a dia das empresas, impossíveis de esquecer e fáceis de aprender</h2>
                        </div>

                </motion.div>

            </div>
        </article>
    );
}