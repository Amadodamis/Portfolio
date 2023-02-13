import React from "react";
import "../css/HeaderStyle.css"

function Header() {
  return (
    <nav className="nav-style">
      <h2 className="nombre">AMADO <span className="apellido">DAMIS</span></h2>

      <ul >
        <li className="li-header-style">
          <a href="/" className="a-header-style">Proyectos</a></li>

        <li className="li-header-style">
          <a href="/" className="a-header-style">Gastronomia</a></li>

        <li className="li-header-style">
          <a href="/" className="a-header-style">Curriculum</a></li>

        <li className="li-header-style">
          <a href="https://www.linkedin.com/in/amadodamis/" className="a-header-style">Linkedin</a></li>

        <li className="li-header-style">
          <a href="https://github.com/Amadodamis" className="a-header-style">Github</a></li>
      </ul>
    </nav>
  );
}

export default Header;
