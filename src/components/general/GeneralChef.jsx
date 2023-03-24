import { Link as LinkScroll } from "react-scroll"
import fotoCheff from "../../img/cocinero.jpg"
import { tituloG, textoG } from "../../JS/dataGeneral"


export default function GeneralChef({ proyecto, setProyecto }) {

    const changeProyect = (e) => {
        let name = e.target.getAttribute('name');
        if (proyecto !== name) {
            setProyecto(name)
        }
    }

    return (
        <div className="split right"><div className="overlay">

            <h1 className="title-rol" >CHEFF</h1>

            <img src={fotoCheff} alt={"foto-chef"} className="foto-general" />

            <div className='description'>
                <h2>{tituloG}</h2>
                <p>{textoG}</p>
            </div>

            <LinkScroll to="cheff" smooth={true} duration={500}>
                <div className="btn" onClick={changeProyect} name="cheff">Proyectos</div>
            </LinkScroll>

        </div></div>
    )
}
