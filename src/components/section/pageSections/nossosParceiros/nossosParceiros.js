import Carossel from "../../../carousel/carossel";
import "./nossosParceirosStyle.css"
import LogoParceiro from "./subComponents/logoParceiro";

export default function NossosParceiros() {

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
        }
      ]
      


    return (
        <section className="nossos-parceiros__container" id="nossosParceiros">
            <h2 className="nossos-parceiros__title">Parceiros</h2>
            <div className="nossos-parceiros__caroussel">
                <Carossel>
                    {[...logos,...logos].map((item) => (
                        <LogoParceiro path={item.path} descricao={item.alt} />
                    ))}
                </Carossel>
            </div>
        </section>
    );
}