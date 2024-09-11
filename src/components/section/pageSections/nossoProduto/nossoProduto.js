import "./nossoProdutoStyle.css"
import { useEffect, useState } from "react";

export default function NossoProduto() {
    const [nossoProduto, setNossoProduto] = useState({});
    const [photos, setPhotos] = useState();

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
            <article className="nosso-produto-container" id="produto">
                <h2 className="nosso-produto-title">{nossoProduto.title}</h2>
                <div className="nosso-produto-content">
                    <div className="nosso-produto-images">
                        {photos.map((photo) => (
                            <img className="nosso-produto__imagem" src={photo.path} alt={photo.alt} />
                        ))}
                    </div>
                    <div className="nosso-produto-text">
                        <p><b>Desenvolvemos a cultura coorporativa</b> por meio da conscientização de colaboradores com uma <b>abordagem inovadora.</b></p>
                        <p>Ajudamos   a   <b>atender  requisitos ESG (ambiental,social e governança)</b>, englobando qualidade,   saúde   e  segurança   no  trabalho, praticas    anticorrupção,    antissuborno    e antiassédio, meio ambiente, sustentabilidade, entre outros</p>
                    </div>
                </div>
            </article>
        );

    return(
        <div></div>
    )
}