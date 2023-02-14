import "../css/proyectosStyle.css"
import Carrousel from "./Carrousel";


function Proyectos(props) {
    const { profesion, proyecto1, proyecto2, proyecto3, proyecto4, identificator,proyects} = props;
    console.log(proyects)

    let texto= "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    let primeraLetra="L"
    let titulo=<h2 className="titulo">PROYECTOS COMO <span className="span-title-proyects">{profesion}</span> </h2>


    return (
        <div className="proyectos-style" id={identificator} >
            <br></br>

            {titulo}
           

            <nav className="nav-proyects">

                <ul className="ul-proyects">
                    <li className="li-proyects">  <a href="/" className="a-proyects">{proyecto1}</a> </li>
                    <li className="li-proyects"> <a href="/" className="a-proyects">{proyecto2}</a></li>
                    <li className="li-proyects"><a href="/" className="a-proyects">{proyecto3}</a></li>
                    <li className="li-proyects"><a href="/" className="a-proyects">{proyecto4}</a></li>
                </ul>

            </nav>

            <p className="texto-proyect"><span className="primeraLetra">{primeraLetra}</span> {texto} </p>

            <Carrousel />

<br/>
        </div>

    );
}

export default Proyectos;