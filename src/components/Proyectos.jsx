import "../css/proyectosStyle.css"

import { useParams } from "react-router-dom";
import { useState } from "react";
import ContentProyectos from "./ContentProyectos";
import { proyectosDev, proyectosCheff } from "../JS/data";

export default function Proyectos() {

    let paramProfesion = useParams()

    const [proyectoDevActual, setProyectoDevActual] = useState(proyectosDev[0])
    const [proyectoCheffActual, setProyectoCheffActual] = useState(proyectosCheff[0])



    return (
        <section id={paramProfesion.profesion}>
            <section className="overlay">

                <article className="proyectos-style" >

                    <h2 className="titulo">PROYECTOS COMO  {paramProfesion.profesion}</h2>

                    {paramProfesion.profesion === "developer" ?
                        <ContentProyectos
                            proyectos={proyectosDev}
                            proyectoActual={proyectoDevActual}
                            setProyectoActual={setProyectoDevActual}
                            profesion={paramProfesion.profesion}
                        />
                        :
                        <ContentProyectos
                            proyectos={proyectosCheff}
                            proyectoActual={proyectoCheffActual}
                            setProyectoActual={setProyectoCheffActual}
                            profesion={paramProfesion.profesion}
                        />
                    }

                </article>
            </section>
        </section>
    );
}