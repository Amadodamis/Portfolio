import "../css/proyectosStyle.css"



function ListaProyectos(props) {
    const { p } = props;
   

    const mostrarProyects = p.map((proyect, i) => {
        return (
            <li key={i} className="li-proyects">
                <a href="/" className="a-proyects">{proyect}</a>
            </li>
        )
    })


    return (
        <nav className="nav-proyects">

            <ul className="ul-proyects">
               {mostrarProyects}
            </ul>

        </nav>

    );
}

export default ListaProyectos;

