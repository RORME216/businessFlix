import "./oQueFazemosStyle.css"


export default function OQueFazemos() {
const windowWidth = window.innerWidth;

    if (windowWidth <= 522)
        return (
            <article className="oque-fazemos_container">
                    <h3 className="oque-fazemos__titulo titulo-1">1. Como fazemos:</h3>

                    <img className="oque-fazemos__imagem-personagens" src="/photos/oQueFazemos/imagem-personagens-mobile.png"/>

                    <div className="oque-fazemos__bloco-texto bloco-texto-1">
                        <p className="oque-fazemos__texto"><b className="oque-fazemos__negrito">Pílulas de humor,</b> eficazes e envolventes, como Tiktok e Short´s do Youtube. Para cada assunto, uma abordagem diferente e memorável.</p>
                    </div>


                    <h3 className="oque-fazemos__titulo titulo-2">2. Seguidas de:</h3>

                    <img className="oque-fazemos__imagem-especialistas" src="/photos/oQueFazemos/imagem-especialistas-mobile.png"/>

                    <div className="oque-fazemos__bloco-texto bloco-texto-2">
                        <p className="oque-fazemos__texto"><b className="oque-fazemos__negrito">Fala do especialista,</b> indicanto a atitude correta e chamando o colaborador para a ação.</p>

                    </div>



                    <img className="oque-fazemos__frase-de-efeito" src="/photos/oQueFazemos/frase-de-efeito.png"/>
                    
                    
            </article>
        );

    if (windowWidth < 1024) 
        return (
            <article className="oque-fazemos_container">
                    <h3 className="oque-fazemos__titulo titulo-1">Como fazemos:</h3>
                    <div className="oque-fazemos__bloco-texto bloco-texto-1">
                        <p className="oque-fazemos__numero">1.</p>
                        <p className="oque-fazemos__texto"><b className="oque-fazemos__negrito">Pílulas de humor,</b> eficazes e envolventes, como Tiktok e Short´s do Youtube. Para cada assunto, uma abordagem diferente e memorável.</p>
                    </div>

                    <div className="oque-fazemos__imagem-container">
                        <img className="oque-fazemos__imagem-personagens" src="/photos/oQueFazemos/imagem-personagens-mobile.png"/>
                        <img className="oque-fazemos__imagem-especialistas" src="/photos/oQueFazemos/imagem-especialistas-mobile.png"/>
                    </div>

                    <h3 className="oque-fazemos__titulo titulo-2">Seguidas de:</h3>
                    <div className="oque-fazemos__bloco-texto bloco-texto-2">
                        <p className="oque-fazemos__numero">2.</p>
                        <p className="oque-fazemos__texto"><b className="oque-fazemos__negrito">Fala do especialista,</b> indicanto a atitude correta e chamando o colaborador para a ação.</p>

                    </div>

                    <img className="oque-fazemos__frase-de-efeito" src="/photos/oQueFazemos/frase-de-efeito.png"/>
                    
                    
            </article>
        );

    return(
        <article className="oque-fazemos_container">
            <div className="oque-fazemos__imagens-background">
                <img className="oque-fazemos__imagem-especialistas" src="/photos/oQueFazemos/imagem-especialista.png"/>
                <img className="oque-fazemos__frase-de-efeito" src="/photos/oQueFazemos/frase-de-efeito.png"/>
                <img className="oque-fazemos__imagem-personagens" src="/photos/oQueFazemos/imagem-personagens.png"/>
                <img className="oque-fazemos__imagem-alto-falante" src="/photos/oQueFazemos/imagem-alto-falante.png"/>
            </div>
            <div className="oque-fazemos__text-container">
                <h3 className="oque-fazemos__titulo titulo-1">Como fazemos:</h3>
                <div className="oque-fazemos__bloco-texto bloco-texto-1">
                    <p className="oque-fazemos__numero">1.</p>
                    <p className="oque-fazemos__texto"><b className="oque-fazemos__negrito">Pílulas de humor,</b> eficazes e envolventes, como Tiktok e Short´s do Youtube. Para cada assunto, uma abordagem diferente e memorável.</p>
                </div>
                <h3 className="oque-fazemos__titulo titulo-2">Seguidas de:</h3>
                <div className="oque-fazemos__bloco-texto bloco-texto-2">
                    <p className="oque-fazemos__numero">2.</p>
                    <p className="oque-fazemos__texto"><b className="oque-fazemos__negrito">Fala do especialista,</b> indicanto a atitude correta e chamando o colaborador para a ação.</p>

                </div>
            </div>
        </article>
    );
}