import "./mobileMenuStyle.css"
import { useState } from "react";
import AnchorButton from "../anchorButton/anchorButton";
import { IoMenu } from "react-icons/io5";

export default function MobileMenu() {

    const [ menuIsOpen, setMenuIsOpen] = useState(false);
    var header = document.querySelector('header');
    var headerHeight;
    if (header) headerHeight = header.offsetHeight;

    if (headerHeight) console.log(headerHeight);

    const mobileDropMenu = {
        top: headerHeight
    }


    return(
        <div className="mobile-menu__container" onClick={() => setMenuIsOpen(!menuIsOpen)}>
            {!menuIsOpen ?
                <IoMenu className="mobile-menu__icon"p />
            :
            <>
                <IoMenu className="mobile-menu__icon"p />
                <div className="navbar-anchor-buttons__mobile" style={headerHeight? mobileDropMenu : {}}>
                    <AnchorButton text={"Produto"} htmlID={"produto"}/>
                    <AnchorButton text={"Contato"} htmlID={"contato"}/>
                    <AnchorButton text={"Benefícios"} htmlID={"beneficios"}/>
                    <AnchorButton text={"Parceiros"} htmlID={"nossosParceiros"}/>
                </div>
            </>
            }
        </div>
    );
}