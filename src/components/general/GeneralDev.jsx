import { Link as LinkScroll } from "react-scroll"
import fotoDeveloper from "../../img/fotocv.jpg"
import { tituloDev, textoDev, titleDev, textDev } from "../../JS/dataGeneral"

import IconsGeneralDev from "./IconsGeneralDev"
import LinksPersonalesDev from "./LinksPersonalesDev"


export default function GeneralDev({ proyecto, setProyecto, leng }) {

    const changeProyect = (e) => {
        let name = e.target.getAttribute('name');
        if (proyecto !== name) {
            setProyecto(name)
        }
    }


    return (
        <div className="split left"  ><div className="overlay">
        
            <h1 className="title-rol">
                {leng === "ESP" ? "DESARROLLADOR" : "DEVELOPER"}
            </h1>

            <img src={fotoDeveloper} alt={"foto-developers"} className="foto-general" />

            <LinksPersonalesDev />

            <div className='description'>

                <h2>
                    {leng === "ESP" ? tituloDev : titleDev}
                </h2>

                <p className="texto-descripcion">
                    {leng === "ESP" ? textoDev : textDev}
                </p>

                <IconsGeneralDev />

            </div>

            <LinkScroll to="developer" smooth={true} duration={500}>

                <div className="btn" onClick={changeProyect} name="developer">
                    {leng === "ESP" ? "PROYECTOS" : "PROJECTS"}
                </div>

            </LinkScroll>
        </div></div>
    )
}
