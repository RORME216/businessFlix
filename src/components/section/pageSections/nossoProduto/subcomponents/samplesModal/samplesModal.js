import "./samplesModalStyle.css"
import { IoClose } from "react-icons/io5";

export default function SamplesModal({setIsOpenSamplesModal}) {

    function onClose() {
        setIsOpenSamplesModal(false);
    }

    return(
        <div className="samples-modal__background" onClick={onClose}>
            <div className="samples-modal__container" onClick={(e)=>e.stopPropagation()}>
                <div className="samples-modal__superior-area">
                    <h3 className="samples-modal__title">Amostras</h3>
                    <IoClose className="samples-modal__close-icon" onClick={onClose}/>
                </div>
            </div>

        </div>
    );
}