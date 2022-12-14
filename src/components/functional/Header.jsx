import IconButton from "../UI/IconButton";
import Search from "../UI/Search";

function Header() {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__menu menu">
                    <IconButton href="/" value="/icons/SRlogo.svg" />
                    <IconButton href="/gallery" value="/icons/camera.svg" />
                    <IconButton href="/map" value="/icons/map-pin.svg" />
                    <Search />
                    <IconButton href="/user" value="/icons/user.svg" />
                    <IconButton href="/shopping-bag" value="/icons/shopping-bag.svg" />
                </div>
            </div>
        </header >
    )
}

export default Header;