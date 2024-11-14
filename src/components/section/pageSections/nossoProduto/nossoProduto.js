import Carossel from "../../../carousel/carousel";
import "./nossoProdutoStyle.css"
import { useEffect, useState } from "react";
import SampleButton from "./subcomponents/sampleButton";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function NossoProduto() {
    const [nossoProduto, setNossoProduto] = useState({});
    const [photos, setPhotos] = useState();
    const [hasHappen, setHasHappen] = useState(false);

    const { ref, inView } = useInView({threshold: 0.1});
    const animation = useAnimation();

    const screenWidth = window.innerWidth;

    useEffect( () => {
        const fetchData = async () => {
            try{
                const response = await fetch("./data/homepageData.json")
                if (!response.ok) {
                    console.log(`Erro HTTP: ${response.status}`)
                }
                const data = await response.json();
                setNossoProduto(data.nossoProduto);
                setPhotos(data.nossoProduto.photos)
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])

    useEffect(() => {
        if (inView || !hasHappen) {
            animation.start({
                y: 0,
                opacity:1,
                transition: {
                    type: 'spring', duration: 2.5, bounce: 0.2
                }
            })
            setHasHappen(true);
        }
    },[inView])

    if(photos)
        return(
            <motion.article className="nosso-produto__container"
                ref={ref} 
                animate={animation}
                initial={{ y: 100, opacity: 0 }} // Define o estado inicial para a animação
            >
                <h2 className="nosso-produto__title">VÍDEOS CURTOS, APRENDIZADO DURADOURO</h2>
                <div className="nosso-produto__content">
                    {screenWidth > 1024 ? 
                        <>
                            <div className="nosso-produto__imagens-container">
                                {screenWidth > 640 ? 
                                    <>
                                        {photos.map((photo) => (
                                            <img className="nosso-produto__imagem" src={photo.path} alt={photo.alt} />
                                        ))}
                                    </>
                                    :
                                    <Carossel>
                                            {[...photos, ...photos, ...photos, ...photos].map((photo) => (
                                                <img className="nosso-produto__imagem" src={photo.path} alt={photo.alt} />
                                            ))}
                                    </Carossel>
                                }

                                
                            </div>
                            <div className="nosso-produto__text-container">
                                <p className="nosso-produto__text">A BusinessFlix impulsiona a cultura corporativa da sua empresa por meio da conscientização dos colaboradores. De segurança no trabalho a técnicas de vendas, de políticas internas a liderança, desenvolvemos conteúdos para todas as necessidades dos nossos clientes, sem barreiras para abordar temas críticos como assédio, racismo, saúde e comunicação.</p>
                                <p className="nosso-produto__text">Nosso trabalho complementa o Plano de Desenvolvimento de Pessoas (PDP), Procedimento Operacional Padrão (POP), ESG (ambiental, social e governança) e outros programas das empresas.</p>
                                <SampleButton />
                            </div>
                        </>
                        :
                        <>
                            <div className="nosso-produto__imagens-container">
                                {screenWidth > 640 ? 
                                    <>
                                        {photos.map((photo) => (
                                            <img className="nosso-produto__imagem" src={photo.path} alt={photo.alt} />
                                        ))}
                                    </>
                                    :
                                    <Carossel>
                                            {[...photos, ...photos, ...photos, ...photos].map((photo) => (
                                                <img className="nosso-produto__imagem" src={photo.path} alt={photo.alt} />
                                            ))}
                                    </Carossel>
                                }

                                
                            </div>

                            <div className="nosso-produto__text-container">
                                <p className="nosso-produto__text">A BusinessFlix impulsiona a cultura corporativa da sua empresa por meio da conscientização dos colaboradores. De segurança no trabalho a técnicas de vendas, de políticas internas a liderança, desenvolvemos conteúdos para todas as necessidades dos nossos clientes, sem barreiras para abordar temas críticos como assédio, racismo, saúde e comunicação.</p>
                                <p className="nosso-produto__text">Nosso trabalho complementa o Plano de Desenvolvimento de Pessoas (PDP), Procedimento Operacional Padrão (POP), ESG (ambiental, social e governança) e outros programas das empresas.</p>
                                <SampleButton />
                            </div>
                        </>
                    }

                </div>
            </motion.article>
        );

    return(
        <div></div>
    )
}