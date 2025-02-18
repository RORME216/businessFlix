import Carossel from "../../../carousel/carousel";
import "./nossosParceirosStyle.css"
import LogoParceiro from "./subComponents/logoParceiro";

export default function NossosParceiros() {

    const screenWidth = window.innerWidth;

    const logos = [
        {
            "link": "https://ebmac.com.br/novo/",
            "path": "/photos/nossosParceiros/EBMAC.png",
            "alt": "Logo da empresa EBMAC - Sustentável em todos os caminhos"
        },
        {
            "link": "https://www.pblopes.com.br/",
            "path": "/photos/nossosParceiros/pbl_lopes_scania_02.png",
            "alt": "Logo da empresa P.B. Lopes | Scania"
        },
        {
            "link": "https://uplab.sp.senai.br/",
            "path": "/photos/nossosParceiros/up_labs_pic.jpg",
            "alt": "Logo da empresa UpLab"
        },
        {
            "link": "https://www.vetro.com.br/",
            "path": "/photos/nossosParceiros/vetro_solucoes.png",
            "alt": "Logo da empresa Vetro - Soluções Inteligentes em Tubos e Conexões"
        },
        {
            "link": "https://www.correios.com.br/",
            "path": "/photos/nossosParceiros/correios_logo.png",
            "alt": "Logo da empresa Correios - Empresa Brasileira de Correios e Telégrafos"
        }
      ]
      


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