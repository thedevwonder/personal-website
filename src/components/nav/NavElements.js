import { Link } from "react-router-dom";

const NavElements = ({text, link}) => {
    return (
        <span className="nav-element">
            <Link to={link}>{text}</Link>
        </span>
    )
}

export default NavElements;