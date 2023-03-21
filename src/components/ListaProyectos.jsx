import "../css/proyectosStyle.css"
import getProyecto from "../JS/getProyecto"


export default function ListaProyectos({ proyectos, proyectoActual, setProyectoActual }) {


    const setProyect = (e) => {
        let name = e.target.getAttribute('name')
        let nuevoProyecto = getProyecto(name, proyectos)
        setProyectoActual(nuevoProyecto)
    }


    return (
        <ul >
            {
                proyectos.map((proyect, i) =>
                    <li key={i} className="li-proyects" name={proyect.title} onClick={setProyect} > {proyect.title} </li>
                )
            }
        </ul>
    );
}