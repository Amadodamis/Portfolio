import { Link as LinkScroll } from "react-scroll"
import fotoCheff from "../../img/cocinero.jpg"
import { tituloG, titleG, textoG, textG } from "../../JS/dataGeneral"
import LinksPersonalesCheff from "./LinksPersonalesCheff"

export default function GeneralChef({ proyecto, setProyecto, leng }) {

    const changeProyect = (e) => {
        let name = e.target.getAttribute('name');
        if (proyecto !== name) {
            setProyecto(name)
        }
    }

    return (
        <div className="split right"><div className="overlay">

            <h1 className="title-rol" >CHEF</h1>

            <img src={fotoCheff} alt={"foto-chef"} className="foto-general" />

            <LinksPersonalesCheff />

            <div className='description'>

                <h2>
                    {leng === "ESP" ? tituloG : titleG}
                </h2>

                <p>
                    {leng === "ESP" ? textoG : textG}
                </p>
            </div>

            <LinkScroll to="cheff" smooth={true} duration={500}>
                <div className="btn" onClick={changeProyect} name="cheff">{leng === "ESP" ? "PROYECTOS" : "PROJECTS"}</div>
            </LinkScroll>

        </div></div>
    )
}
