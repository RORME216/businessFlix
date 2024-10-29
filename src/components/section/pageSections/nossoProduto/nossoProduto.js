import Carossel from "../../../carousel/carousel";
import "./nossoProdutoStyle.css"
import { useEffect, useState } from "react";
import SampleButton from "./subcomponents/sampleButton";

export default function NossoProduto() {
    const [nossoProduto, setNossoProduto] = useState({});
    const [photos, setPhotos] = useState();

    const screenWidth = window.innerWidth;

    useEffect( () => {
        const fetchData = async () => {
            try{
                const response = await fetch("./data/homepageData.json")
                if (!response.ok) {
                    console.log(`Erro HTTP: ${response.status}`)
                }
                const data = await response.json();
                console.log("agora")
                setNossoProduto(data.nossoProduto);
                setPhotos(data.nossoProduto.photos)
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])

    console.log(photos)
    if(photos)
        return(
            <article className="nosso-produto__container">
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

                            <p className="nosso-produto__text">A BusinessFlix impulsiona a cultura corporativa da sua empresa por meio da conscientização dos colaboradores. De segurança no trabalho a técnicas de vendas, de políticas internas a liderança, desenvolvemos conteúdos para todas as necessidades dos nossos clientes, sem barreiras para abordar temas críticos como assédio, racismo, saúde e comunicação. Nosso trabalho complementa o Plano de Desenvolvimento de Pessoas (PDP), Procedimento Operacional Padrão (POP), ESG (ambiental, social e governança) e outros programas das empresas.</p>
                            <SampleButton />
                        </>
                    }

                </div>
            </article>
        );

    return(
        <div></div>
    )
}