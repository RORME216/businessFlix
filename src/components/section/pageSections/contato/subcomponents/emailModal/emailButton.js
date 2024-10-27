import { useState } from "react";
import "./emailButtonStyle.css"
import EmailModal from "./emailModal.js"
import { MdOutlineEmail } from "react-icons/md";

export default function EmailButton() {
    const [isOpenEmailModal, setIsOpenEmailModal] = useState(false);

    function openEmailModal() {
        setIsOpenEmailModal(true);
    }

    return(
            <>
                <MdOutlineEmail className="contato__email-button" 
                    onClick={() => openEmailModal()}
                />

                {isOpenEmailModal && <EmailModal setIsOpenEmailModal={setIsOpenEmailModal}/>}
            </>
    );
}