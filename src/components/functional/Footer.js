import Button from "../UI/Button";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__menu-row">
                    <div className="footer__menu-column">
                        <div className="footer__col">
                            <Button>2022 Mustang</Button>
                            <Button>Gallery</Button>
                            <Button>Features</Button>
                            <Button>Catalog</Button>
                        </div>
                    </div>
                    <div className="footer__menu-column">
                        <div className="footer__col">
                            <Button>Support</Button>
                            <Button>Workshops</Button>
                            <Button>Warranry</Button>
                            <Button>Contact-us</Button>
                        </div>
                    </div>
                    <div className="footer__menu-column">
                        <div className="footer__col">
                            <Button>Ford Expiriense</Button>
                            <Button>Investmens</Button>
                            <Button>Test-Drive</Button>
                            <Button>About</Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;