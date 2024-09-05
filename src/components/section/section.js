import { color } from "chart.js/helpers";
import "./sectionStyle.css"

export default function Section({childComponent, backgroundColor}) {
    const sectionStyle = {
        backgroundColor: backgroundColor,
    }

    return(
        <section className="section" style={sectionStyle}>
            {childComponent}
        </section>
    );
}