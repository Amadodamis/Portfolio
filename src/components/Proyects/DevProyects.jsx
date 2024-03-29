import "./proyects.css"

import { useState } from "react"

import { proyectosDev } from "../../JS/arraysProyectos"

import ListaProyectos from "./DevComponents/ListaProyectosDev"
import DescriptionProyect from "./DevComponents/DescriptionProyect"
import VideoComponent from "./DevComponents/VideoComponent"
import GithubButton from "./DevComponents/GithubButton"

export default function ProyectsDev({ leng }) {

    const [proyectoDevActual, setProyectoDevActual] = useState(proyectosDev[2])


    return (
        <div className='proyectsDev' id="developer" ><div className='overlay filter'>
            <section className="section-proyects">
                <div className="title-list-desc">

                    <h1 className="title-proyects">
                        {leng==="ESP"?"DESARROLLADOR":"DEVELOPER"}
                    </h1>

                    <ListaProyectos
                        proyectos={proyectosDev}
                        proyectoActual={proyectoDevActual} setProyectoActual={setProyectoDevActual}
                    />

                    <DescriptionProyect
                        proyectoDevActual={proyectoDevActual}
                        leng={leng}
                    />

                    <GithubButton
                        title={proyectoDevActual.title}
                        proyectoDevActual={proyectoDevActual}
                    />

                </div>

                {proyectoDevActual.youtubeLink !== "" ?

                    <VideoComponent
                        url={proyectoDevActual.youtubeLink}
                    />
                    :
                    <img src={proyectoDevActual.imgLink} alt='foto-proyecto-dev' className='foto-proyecto-dev' />

                }

            </section>
        </div></div>
    )
}
