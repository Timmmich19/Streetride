import IconButton from "../UI/IconButton";
import Search from "../UI/Search";

function Header() {
    const myf = () => {
        console.log(1)
    }
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__menu menu">
                    <IconButton href="/" onClick={myf} value="/icons/SRlogo.svg" />
                    <IconButton href="/gallery" value="/icons/circle.svg" />
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