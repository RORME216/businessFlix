import './anchorMobileButton.css'

export default function AnchorMobileButton({text, htmlID}) {
    const href = "#"+htmlID;

    return (
        <a className="anchor-mobile-button" href={href}>
                {text}
        </a>
    );
}