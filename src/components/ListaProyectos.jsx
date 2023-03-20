import "../css/proyectosStyle.css"



export default function ListaProyectos({ proyectos }) {


    return (
        <nav className="nav-proyects">

            <ul >
                {
                    proyectos.map((proyect, i) =>
                        <li key={i} className="li-proyects">
                            <a href="/" className="a-proyects" id={proyect} >{proyect}</a>
                        </li>

                    )
                }

            </ul>

        </nav>

    );
}



