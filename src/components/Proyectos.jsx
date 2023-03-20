
import "../css/proyectosStyle.css"

import ListaProyectos from "./ListaProyectos";


function Proyectos({ profesion, identificator, texto, proyectsName }) {


    return (

        <article className="proyectos-style" id={identificator} >


            <h2 className="titulo">PROYECTOS COMO  {profesion}</h2>

            <ListaProyectos
                p={proyectsName}
              
            />

            <div className="container-descripcion">
                <p className="texto-proyect">{texto} </p>
            </div>
  
        </article>

    );
}

export default Proyectos;