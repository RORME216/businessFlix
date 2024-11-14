import { useEffect, useState } from 'react';
import AnchorButton from './subcomponents/anchorButton/anchorButton';
import BusinessFlixLogo from './subcomponents/logo/logo';
import './navbarStyle.css'
import MobileMenu from './subcomponents/mobileMenu/mobileMenu';
import { motion } from 'framer-motion'

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
        <motion.header className="navbar-container"
            initial={{y:-100}}
            animate={{y:0}}
            transition={{duration: 1, delay:1}}
        >
            <div className="navbar-wraper">
                <BusinessFlixLogo className="logo" />
                <nav>
                    {windowWidth <= 1025 ?
                        <MobileMenu />
                    :
                        <div className="navbar-anchor-buttons">
                            <motion.div
                                initial={{opacity:0, duration: 1}}
                                animate={{opacity:1}}
                                transition={{duration:4, delay: 6}}    
                            >
                                <AnchorButton text={"Produto"} htmlID={"produto"}/>
                            </motion.div>
                            <motion.div
                                initial={{opacity:0, duration: 1}}
                                animate={{opacity:1}}
                                transition={{duration:4, delay: 5.5}}    
                            >
                                <AnchorButton text={"Benefícios"} htmlID={"beneficios"}/>
                            </motion.div>
                            <motion.div
                                initial={{opacity:0, duration: 1}}
                                animate={{opacity:1}}
                                transition={{duration:4, delay: 5}}    
                            >
                                <AnchorButton text={"Quem Somos"} htmlID={"quemSomos"}/>

                            </motion.div>
                            <motion.div
                                initial={{opacity:0, duration: 1}}
                                animate={{opacity:1}}
                                transition={{duration:4, delay: 4.5}}    
                            >
                                <AnchorButton text={"Parceiros"} htmlID={"nossosParceiros"}/>
                            </motion.div>
                            <motion.div
                                initial={{opacity:0, duration: 1}}
                                animate={{opacity:1}}
                                transition={{duration:4, delay: 4}}    
                            >
                                <AnchorButton text={"Contato"} htmlID={"contato"}/>
                            </motion.div>
                            
                            
                        </div>
                    }
                </nav>
            </div>

        </motion.header>
    );
}