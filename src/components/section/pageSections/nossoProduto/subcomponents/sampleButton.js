import { useState } from "react";
import "./sampleButtonStyle.css"
import SamplesModal from "./samplesModal/samplesModal"

export default function SampleButton() {
    const [isOpenSamplesModal, setIsOpenSamplesModal] = useState(false);

    function openSamplesModal() {
        setIsOpenSamplesModal(true);
    }

    return(
        <>
            <a className="nosso-produto__botao-amostra" 
                href="https://vimeo.com/user213999881/amostra02bflix"
                target="_blank" rel="noopener noreferrer"
            >
                VEJA UMA AMOSTRA
            </a>

            {/*
                <button className="nosso-produto__botao-amostra" onClick={() => openSamplesModal()}>
                veja nossas amostras
                </button>

                {isOpenSamplesModal && <SamplesModal setIsOpenSamplesModal={setIsOpenSamplesModal}/>}
            */}
        </>
    );
}