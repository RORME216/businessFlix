import "./quemSomosStyle.css"
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer'

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
                        <h2 className="quem-somos__title">QUEM SOMOS!</h2>
                        <p className="quem-somos__text">Idealizada em 2022 com foco em ESG (Ambiental, Social e Governança), a <b>BusinessFlix</b> se reinventou em janeiro de 2024 para se tornar o que é hoje: uma startup disruptiva em treinamentos audiovisuais, transformando temas essenciais em vídeos curtos, dinâmicos e impactantes.</p>
                        <p className="quem-somos__text"><b>Com nossa metodologia exclusiva, quebramos as barreiras para abordar os mais diversos e desafiadores assuntos, oferecendo soluções que realmente engajam e transformam. </b></p>
                        <p className="quem-somos__text">Nossa equipe é formada por especialistas altamente qualificados, e temos orgulho de estar em São Carlos, a capital da tecnologia, onde contamos com um ecossistema de inovação que nos conecta aos melhores profissionais do país em todas as etapas: do planejamento à edição, da concepção ao impacto.</p>
                        <p className="quem-somos__text"><b>Nossa missão é transformar a cultura organizacional das empresas, conscientizando e engajando colaboradores por meio de vídeos que falam a linguagem da era digital. Cada episódio que criamos é uma ferramenta poderosa para inspirar práticas conscientes e desenvolver competências, sempre de forma ágil, relevante e moderna.</b></p>
                    </motion.div>
                </motion.div>
                
            </article>
    );

    else {
        return(
            <article className="quem-somos__container" id="quemSomos">
                <div className="quem-somos__content">
                    <h2 className="quem-somos__title">Quem Somos</h2>
                        <p className="quem-somos__text">Idealizada em 2022 com foco em ESG (Ambiental, Social e Governança), a <b>BusinessFlix</b> se reinventou em janeiro de 2024 para se tornar o que é hoje: uma startup disruptiva em treinamentos audiovisuais, transformando temas essenciais em vídeos curtos, dinâmicos e impactantes.</p>
                        <p className="quem-somos__text"><b>Com nossa metodologia exclusiva, quebramos as barreiras para abordar os mais diversos e desafiadores assuntos, oferecendo soluções que realmente engajam e transformam. </b></p>
                        <p className="quem-somos__text">Nossa equipe é formada por especialistas altamente qualificados, e temos orgulho de estar em São Carlos, a capital da tecnologia, onde contamos com um ecossistema de inovação que nos conecta aos melhores profissionais do país em todas as etapas: do planejamento à edição, da concepção ao impacto.</p>
                        <p className="quem-somos__text"><b>Nossa missão é transformar a cultura organizacional das empresas, conscientizando e engajando colaboradores por meio de vídeos que falam a linguagem da era digital. Cada episódio que criamos é uma ferramenta poderosa para inspirar práticas conscientes e desenvolver competências, sempre de forma ágil, relevante e moderna.</b></p>
                     </div>
            </article>
        );
    }
}