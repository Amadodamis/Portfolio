import "../css/HeaderStyle.css"
import { Link, useParams } from "react-router-dom";

import { titleRuta, ruta } from "../JS/ruta";
import MenuVertical from "./headerMenuVertical";

function Header() {

  let paramProfesion = useParams()
  return (
    <div className='header'>
      <nav className="nav-style">

        <Link to={`/`} className="link">
          <h2 className="nombre">AMADO DAMIS</h2>
        </Link>


        <ul className="menu-horizontal" >

          <li > <Link to={ruta(paramProfesion.profesion)} className="link"> {titleRuta(paramProfesion.profesion)} </Link> </li>

          <MenuVertical />

          <li ><Link to={`https://www.linkedin.com/in/amadodamis/`} className="link">Linkedin</Link></li>

          <li ><Link to={`https://github.com/Amadodamis`} className="link">Linkedin</Link></li>
        </ul>

      </nav>

    </div>
  );
}

export default Header;
