import "./mobileMenuStyle.css"
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import AnchorMobileButton from "../mobileAnchorButton/anchorMobileButton";

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
                    <AnchorMobileButton text={"Produto"} htmlID={"produto"}/>
                    <AnchorMobileButton text={"Benefícios"} htmlID={"beneficios"}/>
                    <AnchorMobileButton text={"Quem Somos"} htmlID={"quemSomos"}/>
                    <AnchorMobileButton text={"Parceiros"} htmlID={"nossosParceiros"}/>
                    <AnchorMobileButton text={"Contato"} htmlID={"contato"}/>
                </div>
            </>
            }
        </div>
    );
}