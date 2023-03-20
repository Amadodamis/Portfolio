
import "../css/proyectosStyle.css"

import ListaProyectos from "./ListaProyectos";

import { proyectosDesarrolador, textoDesarrollador } from "../JS/data";

function Proyectos() {


    return (

        <article className="proyectos-style" >

            <h2 className="titulo">PROYECTOS COMO  Desarrollador</h2>

            <ListaProyectos proyectos={proyectosDesarrolador} />

            <div className="container-descripcion">
                <p className="texto-proyect">{textoDesarrollador} </p>
            </div>

        </article>

    );
}

export default Proyectos;