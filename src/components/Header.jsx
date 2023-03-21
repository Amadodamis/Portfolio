import "../css/HeaderStyle.css"
import { Link, useParams } from "react-router-dom";

import { titleRuta, ruta } from "../JS/ruta";
import MenuVertical from "./headerMenuVertical";

function Header() {

  let paramProfesion = useParams()
  let profesion = paramProfesion.profesion;
  return (
    <div className='header'>
      <ul className="menu-horizontal" >

        <li > <Link to={ruta(profesion)} className="link"> {titleRuta(profesion)} </Link> </li>

        <MenuVertical
          profesion={profesion}
        />

        <li >Eng</li>
      </ul>


    </div>
  );
}

export default Header;
