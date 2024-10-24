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
                        <h2 className="quem-somos__title">Quem Somos</h2>
                        <p className="quem-somos__text">{`A BusinessFlix® cria vídeos curtos e dinâmicos para treinamentos corporativos, que engajam e promovem mudanças de comportamento.`}</p>
                        <p className="quem-somos__text">{`Com humor e especialistas, oferecemos conteúdo fácil de entender, adaptado às novas gerações. Nosso treinamento contínuo melhora o ambiente de trabalho, reduz riscos de compliance e fortalece a governança, com envio flexível e alto retorno.`}</p>
                    </div>
                </div>
                
            </article>
    );

    else {
        return(
            <article className="quem-somos__container" id="quemSomos">
                <img className="quem-somos__image-background"
                    src="/photos/quemSomos/quemSomos.jpg"
                />
                <div className="quem-somos__content-auxiliar-container">
                    <div className="quem-somos__content">
                        <h2 className="quem-somos__title">Quem Somos</h2>
                        <p className="quem-somos__text">{`A BusinessFlix® cria vídeos curtos e dinâmicos para treinamentos corporativos, que engajam e promovem mudanças de comportamento.`}</p>
                        <p className="quem-somos__text">{`Com humor e especialistas, oferecemos conteúdo fácil de entender, adaptado às novas gerações. Nosso treinamento contínuo melhora o ambiente de trabalho, reduz riscos de compliance e fortalece a governança, com envio flexível e alto retorno.`}</p>
                    </div>
                </div>
                
            </article>
        );
    }
}