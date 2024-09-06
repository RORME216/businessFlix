import './benefitsCardStyle.css'

export default function BenefitsCard({data}) {
    return (

        <div className="benefits-card__container">
            <img className="benefits-card__imagem" src={data.photo} />
            <div className="benefits-card__text-container">
                <p className="benefits-card__text">{data.text}</p>
            </div>
        </div>
    );
}