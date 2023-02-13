import React from "react";
import "../css/HeaderStyle.css"

function Header() {

  let h2 = <h2 className="nombre">AMADO <span className="apellido">DAMIS</span></h2>
  
  let proyectos = <a href="/" >Proyectos</a>;
  let gastronomia = <a href="/" >Gastronomia</a>
  let curriculum = <a href="/" >Curriculum</a>
  let linkedin = <a href="https://www.linkedin.com/in/amadodamis/" >Linkedin</a>
  let github = <a href="https://github.com/Amadodamis" >Github</a>


  return (
    <nav className="nav-style">

      {h2}

      <ul className="menu-horizontal" >

        <li > {proyectos} </li>

        <li > {gastronomia} </li>

        <li > {curriculum}

          <ul className="menu-vertical">

            <li ><a href="https://drive.google.com/file/d/14a5Duaq8BFCXHzjRf88C6tfEAyaGdIni/view?usp=sharing">Desarrollador</a></li>

            <li ><a href="https://docs.google.com/document/d/1t1y5hQZPdFFbIUKGZY_lhobcZyhNfnzPUegwa1p4PC4/edit?usp=sharing" >Profesional gastronomico</a></li>

            <li ><a href="https://drive.google.com/file/d/1XSxHOP81Fys0F373Svj722YCylvE1u_1/view?usp=sharing" >Developer</a></li>

            <li ><a href="https://docs.google.com/document/d/1CfaCnM_4KZ-0vE4R7kBt7pLdLUPL-KXQc0zU0Oy-N6c/edit?usp=sharing">Gastronomic Professional</a></li>

          </ul>

        </li>

        <li >{linkedin} </li>

        <li > {github} </li>
      </ul>
    </nav>
  );
}

export default Header;
