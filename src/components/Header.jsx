import "../css/HeaderStyle.css"
import { Link } from "react-router-dom";
import { cvCheff, cvCheffEng, cvDesarrollador, cvDesarrolladorEng } from "../JS/dataCvs";

function Header() {

  return (
    <div className='header'>
      <nav className="nav-style">

        <Link to={`/`} className="link">
          <h2 className="nombre">AMADO DAMIS</h2>
        </Link>


        <ul className="menu-horizontal" >

          <li > <Link to={`/developer`} className="link">Desarrolador</Link> </li>

          <li > <Link to={`/cheff`} className="link">Cheff</Link> </li>

          <li className="vertical"> Cv

            <ul className="menu-vertical">

              <li ><Link to={cvDesarrollador} className="link">Desarrolador</Link></li>

              <li ><Link to={cvDesarrolladorEng} className="link">Developer </Link></li>

              <li ><Link to={cvCheff} className="link">Profesional gastronomico</Link></li>

              <li ><Link to={cvCheffEng} className="link">Gastronomic professional</Link></li>

            </ul>

          </li>

          <li ><Link to={`https://www.linkedin.com/in/amadodamis/`} className="link">Linkedin</Link></li>

          <li ><Link to={`https://github.com/Amadodamis`} className="link">Linkedin</Link></li>
        </ul>

      </nav>

    </div>
  );
}

export default Header;
