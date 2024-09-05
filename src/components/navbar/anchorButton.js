import './anchorButton.css'

export default function AnchorButton({text, htmlID}) {
    const href = "#"+htmlID;

    return (
        <div className="anchor-button">
            <a href={href}>{text}</a>
        </div>
    );
}