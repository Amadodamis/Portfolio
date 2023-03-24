import getProyecto from "../../../JS/getProyecto";

export default function ListaProyectos({ proyectos, proyectoActual, setProyectoActual }) {

    const setProyecto = (e) => {
        let name = e.target.getAttribute('name');
        let nuevoProyectoActual = getProyecto(name, proyectos);
        setProyectoActual(nuevoProyectoActual)
    }

    return (
        <div className='lista-proyectos'>
            {proyectos.map((proyecto, i) =>
                <p key={i} className="proyects-name" onClick={setProyecto} name={proyecto.title}>
                    {proyecto.title}
                </p>
            )
            }
        </div>
    )
}
