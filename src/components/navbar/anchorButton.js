import './anchorButton.css'

export default function AnchorButton({text, htmlID}) {
    const href = "#"+htmlID;

    return (
        <a className="anchor-button" href={href}>{text}</a>
    );
}