import "../css/proyectosStyle.css"
import foto from "../img/asd.jpg"


function Proyectos(props) {
    const { profesion, proyecto1, proyecto2, proyecto3, proyecto4 } = props;


    return (
        <div >

            <h1 className="titulo">PROYECTOS COMO {profesion} </h1>

            <article className="container-menu">

                <div className="menu-container">
                    <ul >
                        <li>{proyecto1} </li>
                        <li>{proyecto2}</li>
                        <li>{proyecto3}</li>
                        <li>{proyecto4}</li>
                    </ul>
                </div>

                <div className="container-buttons-preview">

                    <button className="button-left"><span className="span-left">Prev</span></button>

                    <div className="container-preview">
                        <img src={foto} alt="fotoCv" className="preview" />
                    </div>

                    <button className="button-right"><span className="span-right">Sig</span></button>


                </div>


            </article>


        </div>

    );
}

export default Proyectos;