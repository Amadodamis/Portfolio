import { Link } from "react-router-dom";
import { cvCheff, cvCheffEng, cvDesarrollador, cvDesarrolladorEng } from "../JS/dataCvs";

export default function MenuVertical() {
    return (
        <li className="vertical">
            Cv
            <ul className="menu-vertical">

                <li ><Link to={cvDesarrollador} className="link">Desarrolador</Link></li>

                <li ><Link to={cvDesarrolladorEng} className="link">Developer </Link></li>

                <li ><Link to={cvCheff} className="link">Profesional gastronomico</Link></li>

                <li ><Link to={cvCheffEng} className="link">Gastronomic professional</Link></li>

            </ul>

        </li>
    )
}
