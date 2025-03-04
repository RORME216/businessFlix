import { logos } from "../../../../data/nossosParceiros";
import Carossel from "../../../carousel/carousel";
import "./nossosParceirosStyle.css"
import LogoParceiro from "./subComponents/logoParceiro";

export default function NossosParceiros() {

    const screenWidth = window.innerWidth;

    
      


    return (
        <article className="nossos-parceiros__container">
            <h2 className="nossos-parceiros__title">QUEM JÁ É NOSSO PARCEIRO, APROVA!</h2>
            
                { screenWidth >= 1025 ?
                    <div className="nossos-parceiros__caroussel">
                        <Carossel duration={120}>
                            {[...logos,...logos,...logos,...logos].map((item) => (
                                <LogoParceiro path={item.path} descricao={item.alt} link={item.link}/>
                            ))}
                        </Carossel>
                    </div>
                :
                    <div className="nossos-parceiros__imagens-container">
                        {logos.map((logo => (
                            <LogoParceiro path={logo.path} descricao={logo.alt} />
                        )))}
                    </div>
                }
            
        </article>
    );
}