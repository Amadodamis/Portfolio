import fotoCheff from "../../img/cocinero.jpg"
import { tituloG, textoG } from "../../JS/dataBanner"


export default function GeneralChef({ right, addRight, removeRight }) {
    return (
        <div className="split right" ref={right} onMouseEnter={addRight} onMouseLeave={removeRight}  >

            <h1 className="title-rol" >CHEFF</h1>
            <img src={fotoCheff} alt={"foto-chef"} className="foto-general" />
            <div className='description'>
                <h2>{tituloG}</h2>
                <p>{textoG}</p>
            </div>
            <div className="btn">Proyectos</div>
        </div>
    )
}
