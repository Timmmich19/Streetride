import { Link } from "react-router-dom";

function Button(props) {
    return (
        <button className="button">
            <Link to={props.href}>{props.children}</Link>
        </button>
    )
}
export default Button;