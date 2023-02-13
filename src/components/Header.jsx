import React from "react";
import "../css/HeaderStyle.css"

function Header() {
  return (
    <nav className="nav-style">
      <h2 className="nombre">AMADO <span className="apellido">DAMIS</span></h2>

      <ul>
        <li><a href="/">Proyectos</a></li>
        <li><a href="/">Gastronomia</a></li>
        <li><a href="/">Curriculum</a></li>
        <li><a href="/">Linkedin</a></li>
        <li><a href="/">Github</a></li>
      </ul>
    </nav>
  );
}

export default Header;
