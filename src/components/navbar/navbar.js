import AnchorButton from './anchorButton';
import BusinessFlixLogo from './logo/logo';
import './navbarStyle.css'

export default function Navbar() {
    return (
        <header className="navbar-container">
            <BusinessFlixLogo />
            <div className="navbar-anchor-buttons">

                <AnchorButton text={"Sobre Nós"} htmlID={""}/>
                <AnchorButton text={"Produto"} htmlID={"produto"}/>
                <AnchorButton text={"Contato"} htmlID={"contato"}/>
                
            </div>
        </header>
    );
}