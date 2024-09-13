import { color } from "chart.js/helpers";
import "./sectionStyle.css"

export default function Section({childComponent, backgroundColor, sectionId}) {
    const sectionStyle = {
        backgroundColor: backgroundColor,
    }

    return(
        <section className="section" style={sectionStyle} id={sectionId}>
            {childComponent}
        </section>
    );
}