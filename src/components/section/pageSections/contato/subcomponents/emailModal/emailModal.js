import "./emailModalStyle.css"
import { IoClose } from "react-icons/io5";

export default function EmailModal({setIsOpenEmailModal}) {

    function onClose() {
        setIsOpenEmailModal(false);
    }

    return(
        <div className="email-modal__background" onClick={onClose}>
            <div className="email-modal__container" onClick={(e)=>e.stopPropagation()}>
                <div className="email-modal__superior-area">
                    <h3 className="email-modal__title">E-mail</h3>
                    <IoClose className="email-modal__close-icon" onClick={onClose}/>
                </div>
            </div>

        </div>
    );
}