import "./logoParceiroStyle.css"

export default function LogoParceiro({link, path, descricao}) {
    return(
        <a href={link} className="logo-parceiro__anchor">
            <img className="logo-parceiro" src={path} alt={descricao} />
        </a>
    );
}