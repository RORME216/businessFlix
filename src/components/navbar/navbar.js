import { useEffect, useState } from 'react';
import AnchorButton from './subcomponents/anchorButton/anchorButton';
import BusinessFlixLogo from './subcomponents/logo/logo';
import './navbarStyle.css'
import MobileMenu from './subcomponents/mobileMenu/mobileMenu';

export default function Navbar() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])


    return (
        <header className="navbar-container">
            <div className="navbar-wraper">
                <BusinessFlixLogo className="logo" />
                <nav>
                    {windowWidth <= 1025 ?
                        <MobileMenu />
                    :
                        <div className="navbar-anchor-buttons">
                            <AnchorButton text={"Quem Somos"} htmlID={"quemSomos"}/>
                            <AnchorButton text={"Produto"} htmlID={"produto"}/>
                            <AnchorButton text={"Contato"} htmlID={"contato"}/>
                            <AnchorButton text={"Benefícios"} htmlID={"beneficios"}/>
                            <AnchorButton text={"Parceiros"} htmlID={"nossosParceiros"}/>
                        </div>
                    }
                </nav>
            </div>

        </header>
    );
}