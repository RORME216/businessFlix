import "./oQueFazemosStyle.css"

import { FaBrain } from 'react-icons/fa';
import { FaShareAlt } from 'react-icons/fa';
import { FaHandshake } from 'react-icons/fa';
import { FaMemory } from 'react-icons/fa';
import { FaExchangeAlt } from 'react-icons/fa';
import { FaLeaf } from 'react-icons/fa';


import Carossel from "../../../carousel/carousel";
import BenefitsCard from "./subComponent/benefitsCard/benefitsCard";

const data = [
    {
        photo: "/photos/carossel/construction_team.png",
        text: "são entendimentos facilmente",
        icon: <FaBrain />
    },
    {
        photo: "/photos/carossel/engineer_phone_user.png",
        text: "são simples de compartilhar",
        icon: <FaShareAlt />
    },
    {
        photo: "/photos/carossel/phone_user.png",
        text: "simplesmente engajam",
        icon: <FaHandshake />
    },
    {
        photo: "/photos/carossel/group_study.png",
        text: "ficam na memória",
        icon: <FaMemory />
    },
    {
        photo: "/photos/carossel/team_working.png",
        text: "mudam comportamento",
        icon: <FaExchangeAlt />
    },
    {
        photo: "/photos/carossel/medical_team.png",
        text: "melhoram ambientes",
        icon: <FaLeaf />
    },
]

const screenWidth = window.innerWidth

export default function OQueFazemos() {
    return(
        <article className="oque-fazemos_container">
            <h2 className="oque-fazemos_title">Fazemos videos que...</h2>
            <div className="oque-fazemos_content">
                {screenWidth > 1024 ?
                    <Carossel duration={"60"}>
                        {[...data,...data,...data,...data].map((item) => (
                            <BenefitsCard data={item} />
                        ))}
                    </Carossel>
                :
                    <>
                        {data.map((item) => (
                            <div className="oque-fazemos__item">
                                {item.icon}
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </>
                }
            </div>
        </article>
    );
}