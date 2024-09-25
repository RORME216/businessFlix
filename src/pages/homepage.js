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

export default function Homepage() {
    const cor_azul_escuro = "#002060";
    //const cor_azul_escuro_medio = "#365080";
    const cor_azul_claro = "#DEEBF7";
    //const cor_azul_claro_medio = "#9DC3E6";
    //const cor_verde_claro = "#3FFF25";



    return(
        <>
            <Navbar />  
            <main>
                <HeroSection />
                <Section childComponent={<NossoProduto />} backgroundColor={cor_azul_claro} sectionId={"produto"}/>
                <Section childComponent={<OQueFazemos />} backgroundColor={cor_azul_escuro} sectionId={"oqueFazemos"}/>
                <Section childComponent={<Contato />} backgroundColor={cor_azul_escuro} sectionId={"contato"}/>
                <Section childComponent={<Beneficios />} backgroundColor={cor_azul_escuro} sectionId={"beneficios"}/>
                <Section childComponent={<NossosParceiros />} backgroundColor={cor_azul_claro} sectionId={"nossosParceiros"}/>
            </main>
            <Footer />
        </>
    );
}