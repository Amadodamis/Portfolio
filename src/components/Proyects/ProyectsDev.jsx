import "./proyects.css"

import { useState } from "react"

import { proyectosDev } from "../../JS/data"

import ListaProyectos from "./ListaProyectosDev"
import DescriptionProyect from "./DescriptionProyect"
import VideoComponent from "./VideoComponent"
import GithubButton from "./GithubButton"

export default function ProyectsDev() {

    const [proyectoDevActual, setProyectoDevActual] = useState(proyectosDev[0])


    return (
        <div className='proyectsDev' id="developer" ><div className='overlay filter'>
            <section className="section-proyects">

                <div className="title-list-desc">

                    <h1 className="title-proyects">
                        DEVELOPER
                    </h1>

                    <ListaProyectos
                        proyectos={proyectosDev}
                        proyectoActual={proyectoDevActual} setProyectoActual={setProyectoDevActual}
                    />

                    <DescriptionProyect
                        proyectoDevActual={proyectoDevActual}


                    />

                </div>
                <GithubButton
                    title={proyectoDevActual.title}
                    proyectoDevActual={proyectoDevActual}
                />

                <VideoComponent />

            </section>
        </div></div>
    )
}
