import "./oQueFazemosStyle.css"
import Carossel from "./subComponent/carossel";

export default function OQueFazemos() {
    return(
        <article className="oque-fazemos_container">
                <h2 className="oque-fazemos_title">Fazemos videos que...</h2>
                <div className="oque-fazemos_content">
                    <Carossel />
                </div>
            </article>
    );
}