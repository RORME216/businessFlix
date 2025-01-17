import "./sectionStyle.css"

export default function Section({childComponent, backgroundColor, sectionId, isSectioOqueFazemos=false}) {
    const sectionStyle = {
        backgroundColor: backgroundColor,
    }

    return(
        <section className={!isSectioOqueFazemos ? "section" : "section oque-fazemos-section"} style={sectionStyle} id={sectionId}>
            {childComponent}
        </section>
    );
}