import "./sectionStyle.css"

export default function Section({childComponent, backgroundColor, backgroundImage, sectionId, isSectioOqueFazemos=false}) {
    const sectionStyle = {
        backgroundColor: backgroundColor,
        backgroundImage: `url(${backgroundImage})`
    }

    return(
        <section className={!isSectioOqueFazemos ? "section" : "section oque-fazemos-section"} style={sectionStyle} id={sectionId}>
            {childComponent}
        </section>
    );
}