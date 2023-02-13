import "../css/proyectosStyle.css"
import foto from "../img/asd.jpg"


function Proyectos(props) {
    const { profesion, proyecto1, proyecto2, proyecto3, proyecto4 } = props;


    return (
        <div className="proyectos-style" >

            <h2 className="titulo">PROYECTOS COMO <span className="span-title-proyects">{profesion}</span> </h2>

            <nav className="nav-proyects">

                <ul className="ul-proyects">
                    <li className="li-proyects">  <a href="/" className="a-proyects">{proyecto1}</a> </li>
                    <li className="li-proyects"> <a href="/"  className="a-proyects">{proyecto2}</a></li>
                    <li className="li-proyects"><a href="/"  className="a-proyects">{proyecto3}</a></li>
                    <li className="li-proyects"><a href="/"  className="a-proyects">{proyecto4}</a></li>
                </ul>

            </nav>



            <article className="container-menu">


                <div className="container-buttons-preview">

                    <button className="button-left"><span className="span-left">Prev</span></button>

                    <div className="container-preview">
                        <img src={foto} alt="fotoCv" className="preview" />
                    </div>

                    <button className="button-right"><span className="span-right">Sig</span></button>


                </div>


            </article>
            <br/>


        </div>

    );
}

export default Proyectos;