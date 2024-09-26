import './benefitsCardStyle.css'

export default function BenefitsCard({data}) {

    const alt = `trabalhadores em expediente`

    return (

        <div className="benefits-card__container">
            <img className="benefits-card__imagem" src={data.photo} alt={alt}/>
            <div className="benefits-card__text-container">
                <p className="benefits-card__text">{data.text}</p>
            </div>
        </div>
    );
}