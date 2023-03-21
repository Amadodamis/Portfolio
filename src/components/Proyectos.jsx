import "../css/proyectosStyle.css"

import { useState } from "react";
import ContentProyectos from "./ContentProyectos";
import { proyectosDev, proyectosCheff } from "../JS/data";

export default function Proyectos({ profesion }) {


    const [proyectoDevActual, setProyectoDevActual] = useState(proyectosDev[0])
    const [proyectoCheffActual, setProyectoCheffActual] = useState(proyectosCheff[0])



    return (
        <section id={profesion}>
            <section className="overlay">

                <article className="proyectos-style" >

                    <h2 className="titulo">PROYECTOS COMO  {profesion}</h2>

                    {profesion === "developer" ?
                        <ContentProyectos
                            proyectos={proyectosDev}
                            proyectoActual={proyectoDevActual}
                            setProyectoActual={setProyectoDevActual}
                            profesion={profesion}
                        />
                        :
                        <ContentProyectos
                            proyectos={proyectosCheff}
                            proyectoActual={proyectoCheffActual}
                            setProyectoActual={setProyectoCheffActual}
                            profesion={profesion}
                        />
                    }

                </article>
            </section>
        </section>
    );
}