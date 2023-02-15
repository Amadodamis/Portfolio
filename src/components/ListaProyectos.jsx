import "../css/proyectosStyle.css"



function ListaProyectos(props) {
    const { p,cambiarProyectoActual } = props;
   

    const mostrarProyects = p.map((proyect, i) => {
        return (
            <li key={i} className="li-proyects">
                <a href="/" className="a-proyects" onClick={cambiarProyectoActual} id={proyect} >{proyect}</a>
            </li>
        )
    })


    return (
        <nav className="nav-proyects">

            <ul >
               {mostrarProyects}
            </ul>

        </nav>

    );
}

export default ListaProyectos;

