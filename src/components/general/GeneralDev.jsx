import { Link as LinkScroll } from "react-scroll"
import fotoDeveloper from "../../img/fotocv.jpg"
import { tituloDev, textoDev } from "../../JS/dataGeneral"

import IconsGeneralDev from "./IconsGeneralDev"
import LinksPersonalesDev from "./LinksPersonalesDev"


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

            <LinksPersonalesDev />

            <div className='description'>
                <h2>{tituloDev}</h2>
                <p className="texto-descripcion">{textoDev}</p>
                <IconsGeneralDev />
            </div>

            <LinkScroll to="developer" smooth={true} duration={500}>
                <div className="btn" onClick={changeProyect} name="developer">Proyectos</div>
            </LinkScroll>
        </div></div>
    )
}
