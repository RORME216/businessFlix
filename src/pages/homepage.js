import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Section from "../components/section/section";

export default function Homepage() {
    const cor_azul_escuro = "#002060";
    const cor_azul_escuro_medio = "#365080";
    const cor_azul_claro = "#DEEBF7";
    const cor_azul_claro_medio = "#9DC3E6";
    const cor_verde_claro = "#3FFF25";



    return(
        <div>
            <Navbar />

            <Section childComponent={<p>Teste</p>} backgroundColor={cor_azul_escuro_medio}/>


            <Footer />
        </div>
    );
}