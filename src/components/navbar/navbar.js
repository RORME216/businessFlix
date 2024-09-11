import AnchorButton from './anchorButton';
import BusinessFlixLogo from './logo/logo';
import './navbarStyle.css'

export default function Navbar() {
    return (
        <header className="navbar-container">
            <div className="navbar-wraper">
                <BusinessFlixLogo />
                <div className="navbar-anchor-buttons">

                    <AnchorButton text={"Produto"} htmlID={"produto"}/>
                    <AnchorButton text={"Contato"} htmlID={"contato"}/>
                    <AnchorButton text={"Benefícios"} htmlID={"beneficios"}/>
                    <AnchorButton text={"Nossos Parceiros"} htmlID={"nossosParceiros"}/>
                    
                </div>
            </div>
            
        </header>
    );
}