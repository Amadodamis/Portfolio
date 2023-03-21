import { Link } from "react-router-dom";
import getCvs from "../JS/getCvs";

export default function MenuVertical({ profesion }) {

    let cvs = [...getCvs(profesion)]

    return (
        <li className="vertical">
            CV
            <ul className="menu-vertical">
                {
                    cvs.map((cv, i) =>
                        <li ><Link to={cv.link} className="link">{cv.title} {cv.leng}</Link></li>
                    )
                }
            </ul>

        </li>
    )
}
