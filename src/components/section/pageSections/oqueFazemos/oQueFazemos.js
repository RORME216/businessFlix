import "./oQueFazemosStyle.css"
import Carossel from "./../../../carousel/carossel";
import BenefitsCard from "./subComponent/benefitsCard/benefitsCard";

const data = [
    {
        photo: "/photos/carossel/construction_team.png",
        text: "ficam na memória"
    },
    {
        photo: "/photos/carossel/engineer_phone_user.png",
        text: "ficam na memória"
    },
    {
        photo: "/photos/carossel/phone_user.png",
        text: "ficam na memória"
    },
    {
        photo: "/photos/carossel/group_study.png",
        text: "ficam na memória"
    },
    {
        photo: "/photos/carossel/team_working.png",
        text: "ficam na memória"
    },
    {
        photo: "/photos/carossel/medical_team.png",
        text: "ficam na memória"
    },
]


export default function OQueFazemos() {
    return(
        <section className="oque-fazemos_container">
            <h2 className="oque-fazemos_title">Fazemos videos que...</h2>
            <div className="oque-fazemos_content">
                <Carossel>
                    {[...data,...data].map((item) => (
                        <BenefitsCard data={item} />
                    ))}
                </Carossel>
            </div>
        </section>
    );
}