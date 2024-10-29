import "./quemSomosStyle.css"

export default function QuemSomos() {
    const screemWidth = window.innerWidth;
    console.log(screemWidth)

    if (screemWidth >= 1025)
        return(
            <article className="quem-somos__container" id="quemSomos">
                <img className="quem-somos__image-background"
                    src="/photos/quemSomos/quemSomos.jpg"
                />
                <div className="quem-somos__content-auxiliar-container">
                    <div className="quem-somos__content">
                        <h2 className="quem-somos__title">QUEM SOMOS!</h2>
                        <p className="quem-somos__text">{`Idealizada em 2022 com foco em ESG (Ambiental, Social e Governança), a BusinessFlix se reinventou em janeiro de 2024 para se tornar o que é hoje: uma startup disruptiva em treinamentos audiovisuais, transformando temas essenciais em vídeos curtos, dinâmicos e impactantes. Com nossa metodologia exclusiva, quebramos as barreiras para abordar os mais diversos e desafiadores assuntos, oferecendo soluções que realmente engajam e transformam. Nossa equipe é formada por especialistas altamente qualificados, e temos orgulho de estar em São Carlos, a capital da tecnologia, onde contamos com um ecossistema de inovação que nos conecta aos melhores profissionais do país em todas as etapas: do planejamento à edição, da concepção ao impacto.`}</p>
                        <p className="quem-somos__text">{`Nossa missão é transformar a cultura organizacional das empresas, conscientizando e engajando colaboradores por meio de vídeos que falam a linguagem da era digital. Cada episódio que criamos é uma ferramenta poderosa para inspirar práticas conscientes e desenvolver competências, sempre de forma ágil, relevante e moderna.`}</p>
                    </div>
                </div>
                
            </article>
    );

    else {
        return(
            <article className="quem-somos__container" id="quemSomos">
                <div className="quem-somos__content">
                    <h2 className="quem-somos__title">Quem Somos</h2>
                    <p className="quem-somos__text">{`A BusinessFlix® cria vídeos curtos e dinâmicos para treinamentos corporativos, que engajam e promovem mudanças de comportamento.`}</p>
                    <p className="quem-somos__text">{`Com humor e especialistas, oferecemos conteúdo fácil de entender, adaptado às novas gerações. Nosso treinamento contínuo melhora o ambiente de trabalho, reduz riscos de compliance e fortalece a governança, com envio flexível e alto retorno.`}</p>
                </div>
            </article>
        );
    }
}