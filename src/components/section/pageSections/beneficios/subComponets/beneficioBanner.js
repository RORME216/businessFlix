import "./beneficioBannerStyle.css"

export default function BeneficioBanner({icon, text}) {
    return (
        <div className="beneficio-banner__container">
                {icon}
            <p className="beneficio-banner__text">{text}</p>
        </div>
    );
}