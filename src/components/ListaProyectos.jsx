import "../css/proyectosStyle.css"



export default function ListaProyectos({ p }) {


    return (
        <nav className="nav-proyects">

            <ul >
                {
                    p.map((proyect, i) =>
                        <li key={i} className="li-proyects">
                            <a href="/" className="a-proyects" id={proyect} >{proyect}</a>
                        </li>

                    )
                }

            </ul>

        </nav>

    );
}



