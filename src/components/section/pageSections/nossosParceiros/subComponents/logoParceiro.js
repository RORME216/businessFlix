import "./logoParceiroStyle.css"

export default function LogoParceiro({link, path, descricao}) {
    return(
        <a href={link}>
            <img className="logo-parceiro" src={path} alt={descricao} />
        </a>
    );
}