import fotoDeveloper from "../../img/fotocv.jpg"
import { tituloDev, textoDev } from "../../JS/dataBanner"
export default function GeneralDev({ left, addLeft, removeLeft }) {
    return (
        <div className="split left" ref={left} onMouseEnter={addLeft} onMouseLeave={removeLeft} >
            <h1 className="title-rol">DEVELOPER</h1>

            <img src={fotoDeveloper} alt={"foto-developers"} className="foto-general" />

            <div className='description'>
                <h2>{tituloDev}</h2>
                <p>{textoDev}</p>
            </div>

            <div className="btn">Proyectos</div>

        </div>
    )
}
