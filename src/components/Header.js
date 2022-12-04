import Button from "./Button";

function Header() {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__menu menu">
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                </div>
            </div>
        </header>
    )
}

export default Header;