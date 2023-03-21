import "../css/HeaderStyle.css"
import { Link, useLocation } from "react-router-dom";

import { titleRuta, ruta, parseLocation } from "../JS/ruta";
import MenuVertical from "./headerMenuVertical";

function Header() {
  let location = useLocation()
  let profesion = parseLocation(location.pathname)

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