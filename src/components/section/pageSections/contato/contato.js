import "./contatoStyle.css"

export default function Contato() {
    return(
        <div className="contato__container">
            <div className="contato__content">
                <h2 className="contato__title">Se interessou?</h2>
                <a href="https://wa.me/5516988041257" target="_blank"><button className="contato__button">Fale conosco</button></a>
            </div>
                <img className="contato__image" src="/photos/contato/img_contato.png"/>
        </div>
    );
}