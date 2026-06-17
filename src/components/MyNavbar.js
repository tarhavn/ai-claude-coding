import './MyNavbar.css'

const MyNavbar = () => {
    return (
        <>
        <a class="hamburger" href="#navbar" aria-label="Open main menu">
            <span class="sr-only">Open main menu</span>
            <img src="https://assets.codepen.io/296057/bars-solid.svg" alt="Navigation button."  aria-hidden="true" />
        </a>

        <nav id="navbar">
            <img src="./uia-horisontal-med-navn-positiv.svg" alt="UiA student. Click for home." class="logo" />
            <ul>
                <li><a href="/">Hjemmeside</a></li>
                <li><a href="/anvendt-teknologi">Anvendt Teknologi</a></li>
                <li><a href="/skytjenester">Skytjenester</a></li>
                <li><a href="/sikkerhet">Sikkerhet</a></li>
                <li><a href="/about">Om Gowsigan</a></li>
            </ul>

            <a class="close" href="#" aria-label="Close main menu">
                <span class="sr-only">Close main menu</span>
                <img src="https://assets.codepen.io/296057/times-solid.svg" alt="close button."  aria-hidden="true" />
            </a>
        </nav>
        </>
    )
}

export default MyNavbar;