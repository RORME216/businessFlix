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
            <article className="nosso-produto-container">
                <h2 className="nosso-produto-title">{nossoProduto.title}</h2>
                <div className="nosso-produto-content">
                    <div className="nosso-produto-images">
                        {photos.map((photo) => (
                            <img src={photo.path} alt={photo.alt} />
                        ))}
                    </div>
                    <p className="nosso-produto-text">{nossoProduto.text}</p>
                </div>
            </article>
        );

    return(
        <div></div>
    )
}