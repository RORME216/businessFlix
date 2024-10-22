import Carossel from "../../../carousel/carousel";
import "./quemSomosStyle.css"
import { useEffect, useState } from "react";

export default function QuemSomos() {
    const [quemSomos, setQuemSomos] = useState({});
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
                setQuemSomos(data.quemSomos);
                setPhotos(data.quemSomos.photos)
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])

    console.log(quemSomos)
    if(photos)
        return(
            <article className="quem-somos__container">
                <h2 className="quem-somos__title">{quemSomos.title}</h2>
                <div className="quem-somos__content">
                    {screenWidth > 1024 ? 
                        <>
                            <div className="quem-somos__imagens-container">
                                {screenWidth > 640 ? 
                                    <>
                                        {photos.map((photo) => (
                                            <img className="quem-somos__imagem" src={photo.path} alt={photo.alt} />
                                        ))}
                                    </>
                                    :
                                    <Carossel>
                                            {[...photos, ...photos, ...photos, ...photos].map((photo) => (
                                                <img className="quem-somos__imagem" src={photo.path} alt={photo.alt} />
                                            ))}
                                    </Carossel>
                                }

                                
                            </div>
                            <div className="quem-somos__text-container">
                                <p className="quem-somos__text"><b>Desenvolvemos a cultura coorporativa</b> por meio da conscientização de colaboradores com uma <b>abordagem inovadora.</b></p>
                                <p className="quem-somos__text">Ajudamos   a   <b>atender  requisitos ESG (ambiental, social e governança)</b>, englobando qualidade,   saúde   e  segurança   no  trabalho, praticas    anticorrupção,    antissuborno    e antiassédio, meio ambiente, sustentabilidade, entre outros</p>

                            </div>
                        </>
                        :
                        <>
                            <p className="quem-somos__text"><b>Desenvolvemos a cultura coorporativa</b> por meio da conscientização de colaboradores com uma <b>abordagem inovadora.</b></p>
                            <div className="quem-somos__imagens-container">
                                {screenWidth > 640 ? 
                                    <>
                                        {photos.map((photo) => (
                                            <img className="quem-somos__imagem" src={photo.path} alt={photo.alt} />
                                        ))}
                                    </>
                                    :
                                    <Carossel>
                                            {[...photos, ...photos, ...photos, ...photos].map((photo) => (
                                                <img className="quem-somos__imagem" src={photo.path} alt={photo.alt} />
                                            ))}
                                    </Carossel>
                                }

                                
                            </div>

                            <p className="quem-somos__text">Ajudamos   a   <b>atender  requisitos ESG (ambiental,social e governança)</b>, englobando qualidade,   saúde   e  segurança   no  trabalho, praticas    anticorrupção,    antissuborno    e antiassédio, meio ambiente, sustentabilidade, entre outros</p>
                        </>
                    }

                </div>
            </article>
        );

    return(
        <div></div>
    )
}