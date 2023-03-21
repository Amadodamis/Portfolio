import ListaProyectos from "./ListaProyectos"

export default function ContentProyectos({ proyectos, proyectoActual, setProyectoActual, profesion }) {


    return (
        <>
            <ListaProyectos
                proyectos={proyectos}
                proyectoActual={proyectoActual}
                setProyectoActual={setProyectoActual}
            />

            {
                profesion === "developer" &&

                <div className="container-descripcion">
                    <p className="texto-proyect">{proyectoActual.texto} </p>
                </div>

            }

        </>
    )
}
