
import fotoDeveloper from "../../img/fotocv.jpg"
import { tituloDev, textoDev } from "../../JS/dataBanner"
import Icons from "./Icons"

export default function GeneralDev({ left, addLeft, removeLeft, proyecto, setProyecto }) {

    const changeProyect = (e) => {
        let name = e.target.getAttribute('name');
        if (proyecto !== name) {
            setProyecto(name)
        }
    }


    return (
        <div className="split left" ref={left} onMouseEnter={addLeft} onMouseLeave={removeLeft} >
            <h1 className="title-rol">DEVELOPER</h1>

            <img src={fotoDeveloper} alt={"foto-developers"} className="foto-general" />

            <div className='description'>
                <h2>{tituloDev}</h2>
                <p className="texto-descripcion">{textoDev}</p>
                <Icons />
            </div>
            <a href="#developer">
                <div className="btn" onClick={changeProyect} name="developer">Proyectos</div>
            </a>
        </div>
    )
}
