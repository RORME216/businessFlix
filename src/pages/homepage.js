import "./homepageStyle.css"
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import NossosParceiros from "../components/section/pageSections/nossosParceiros/nossosParceiros";
import Beneficios from "../components/section/pageSections/beneficios/beneficios";
import Contato from "../components/section/pageSections/contato/contato";
import NossoProduto from "../components/section/pageSections/nossoProduto/nossoProduto";
import OQueFazemos from "../components/section/pageSections/oqueFazemos/oQueFazemos";
import Section from "../components/section/section";
import HeroSection from "../components/section/pageSections/heroSection/heroSection";
import QuemSomos from "../components/section/pageSections/quemSomos/quemSomos";
import { useEffect, useState } from "react";

export default function Homepage() {
    const cor_azul_escuro = "#002060";
    //const cor_azul_escuro_medio = "#365080";
    const cor_azul_claro = "#DEEBF7";
    //const cor_azul_claro_medio = "#9DC3E6";
    //const cor_verde_claro = "#3FFF25";

    const [renderSections, setRenderSections] = useState({
        hero: false,
        nossoProduto: false,
        beneficios: false,
        quemSomos: false,
        oQueFazemos: false,
        nossosParceiros: false,
        contato: false,
        footer: false
    });

    useEffect( () => {

        const timeout = [
            setTimeout(() => setRenderSections(prev => ({...prev, hero: true})), 0),
            setTimeout(() => setRenderSections(prev => ({...prev, nossoProduto: true})), 500),
            setTimeout(() => setRenderSections(prev => ({...prev, beneficios: true})), 1000),
            setTimeout(() => setRenderSections(prev => ({...prev, quemSomos: true})), 1500),
            setTimeout(() => setRenderSections(prev => ({...prev, oQueFazemos: true})), 2000),
            setTimeout(() => setRenderSections(prev => ({...prev, nossosParceiros: true})), 2500),
            setTimeout(() => setRenderSections(prev => ({...prev, contato: true})), 3000),
            setTimeout(() => setRenderSections(prev => ({...prev, footer: true})), 3500)
        ]

        return () => timeout.forEach(clearTimeout);
    },[])


    return(
        <>
            <Navbar />  
            <main>
                {renderSections.hero && <HeroSection />}
                {renderSections.nossoProduto && <Section childComponent={<NossoProduto />} backgroundColor={cor_azul_claro} sectionId={"produto"}
                    backgroundImage={"/photos/nossoProdutoPhotos/background.png"}/>}
                {renderSections.beneficios && <Section childComponent={<Beneficios />} backgroundColor={cor_azul_escuro} sectionId={"beneficios"}/>}
                {renderSections.quemSomos && <QuemSomos />}
                {renderSections.oQueFazemos && <Section childComponent={<OQueFazemos />} backgroundColor={cor_azul_claro} sectionId={"oqueFazemos"} isSectioOqueFazemos={true}/>}
                {renderSections.contato && <Section childComponent={<Contato />} backgroundColor={cor_azul_escuro} sectionId={"contato"}/>}
                {renderSections.nossosParceiros && <Section childComponent={<NossosParceiros />} backgroundColor={cor_azul_claro} sectionId={"nossosParceiros"}/>}
            </main>
            {renderSections.footer && <Footer />}
        </>
    );
}