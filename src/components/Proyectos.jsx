import "../css/proyectosStyle.css"
import Carrousel from "./Carrousel";


function Proyectos(props) {
    const { profesion, proyecto1, proyecto2, proyecto3, proyecto4 } = props;


    return (
        <div className="proyectos-style" >
            <br></br>
            <h2 className="titulo">PROYECTOS COMO <span className="span-title-proyects">{profesion}</span> </h2>
           

            <nav className="nav-proyects">

                <ul className="ul-proyects">
                    <li className="li-proyects">  <a href="/" className="a-proyects">{proyecto1}</a> </li>
                    <li className="li-proyects"> <a href="/" className="a-proyects">{proyecto2}</a></li>
                    <li className="li-proyects"><a href="/" className="a-proyects">{proyecto3}</a></li>
                    <li className="li-proyects"><a href="/" className="a-proyects">{proyecto4}</a></li>
                </ul>

            </nav>

            <Carrousel />

<br/>
        </div>

    );
}

export default Proyectos;