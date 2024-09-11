import "./nossosParceirosStyle.css"

export default function NossosParceiros() {
    return (
        <div className="nossos-parceiros__container">
            <h2 className="nossos-parceiros__title">Parceiros</h2>
            <div className="nossos-parceiros__caroussel">
                <img className="nossos-parceiros__imgem" src="/photos/nossosParceiros/logo(2).png" />
                <img className="nossos-parceiros__imgem" src="/photos/nossosParceiros/logo(3).png" />
                <img className="nossos-parceiros__imgem" src="/photos/nossosParceiros/logo(4).png" />
            </div>
        </div>
    );
}