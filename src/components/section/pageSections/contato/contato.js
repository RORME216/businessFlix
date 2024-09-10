import "./contatoStyle.css"

export default function Contato() {
    return(
        <div className="contato__container">
            <div className="contato__content">
                <h2 className="contato__title">Se interessou?</h2>
                <button className="contato__button"><a>Fale conosco</a></button>
            </div>
                <img className="contato__image" src="/photos/contato/img_contato.png"/>
        </div>
    );
}