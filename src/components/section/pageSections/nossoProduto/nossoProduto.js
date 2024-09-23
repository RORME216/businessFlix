import Carossel from "../../../carousel/carousel";
import "./nossoProdutoStyle.css"
import { useEffect, useState } from "react";

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
            <article className="nosso-produto-container">
                <h2 className="nosso-produto-title">{nossoProduto.title}</h2>
                <div className="nosso-produto-content">
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
                            <div>
                                <p className="nosso-produto-text"><b>Desenvolvemos a cultura coorporativa</b> por meio da conscientização de colaboradores com uma <b>abordagem inovadora.</b></p>
                                <p className="nosso-produto-text">Ajudamos   a   <b>atender  requisitos ESG (ambiental,social e governança)</b>, englobando qualidade,   saúde   e  segurança   no  trabalho, praticas    anticorrupção,    antissuborno    e antiassédio, meio ambiente, sustentabilidade, entre outros</p>
                            </div>
                        </>
                        :
                        <>
                            <p className="nosso-produto-text"><b>Desenvolvemos a cultura coorporativa</b> por meio da conscientização de colaboradores com uma <b>abordagem inovadora.</b></p>

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

                            <p className="nosso-produto-text">Ajudamos   a   <b>atender  requisitos ESG (ambiental,social e governança)</b>, englobando qualidade,   saúde   e  segurança   no  trabalho, praticas    anticorrupção,    antissuborno    e antiassédio, meio ambiente, sustentabilidade, entre outros</p>
                        </>
                    }

                </div>
            </article>
        );

    return(
        <div></div>
    )
}