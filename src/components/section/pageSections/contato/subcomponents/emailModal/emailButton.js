import { useState } from "react";
import { createPortal } from "react-dom";
import "./emailButtonStyle.css"
import EmailModal from "./emailModal.js"
import { MdOutlineEmail } from "react-icons/md";
import { email } from "../../../../../../data/dadosContato.js";

export default function EmailButton() {
    const [isOpenEmailModal, setIsOpenEmailModal] = useState(false);

    function openEmailModal() {
        setIsOpenEmailModal(true);
    }

    return(
        <>
            <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                <MdOutlineEmail className="contato__email-button" />
            </a>
        </>
);

    /*
    return(
            <>
                <MdOutlineEmail className="contato__email-button" 
                    onClick={() => openEmailModal()}
                />

                {isOpenEmailModal && 
                    createPortal(
                        <EmailModal setIsOpenEmailModal={setIsOpenEmailModal}/>,
                        document.body
                    )
                }
            </>
    );
    */
}