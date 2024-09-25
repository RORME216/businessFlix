import "./heroSectionStyle.css"

export default function HeroSection() {
    return (
        <article className="hero-section__container">
            <div className="hero-section__background"></div>
            <img className="hero-section__background-image" src="/photos/heroSection/foto_01.jpg" alt="Empregados focados trabalhando em equipamentos eletrónicos"/>

            <div className="hero-section__content">
                <img className="hero-section_phone-frame" src="/photos/heroSection/cellPhone.png" alt="Smarth phone exibendo video educativo da empresa"/>
                <h2 className="hero-section__header-call">Comunicação inovadora que transforma</h2>
            </div>
        </article>
    );
}