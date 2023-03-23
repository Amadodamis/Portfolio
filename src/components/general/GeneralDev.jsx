
import fotoDeveloper from "../../img/fotocv.jpg"
import { tituloDev, textoDev } from "../../JS/dataBanner"

import Icons from "./Icons"
import LinksPersonales from "./LinksPersonales"


export default function GeneralDev({ proyecto, setProyecto }) {

    const changeProyect = (e) => {
        let name = e.target.getAttribute('name');
        if (proyecto !== name) {
            setProyecto(name)
        }
    }


    return (
        <div className="split left"  ><div className="overlay">
            <h1 className="title-rol">DEVELOPER</h1>

            <img src={fotoDeveloper} alt={"foto-developers"} className="foto-general" />

            <LinksPersonales />

            <div className='description'>
                <h2>{tituloDev}</h2>
                <p className="texto-descripcion">{textoDev}</p>
                <Icons />
            </div>

            <a href="#developer">
                <div className="btn" onClick={changeProyect} name="developer">Proyectos</div>
            </a>
        </div></div>
    )
}
