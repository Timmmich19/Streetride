import { Link } from "react-router-dom";

function IconButton(props) {
    return (
        <button onClick={(props.onClick)} className="header__button">
            <Link to={props.href}><img src={props.value} alt="undefined" /></Link>
        </button>
    )
}
export default IconButton;