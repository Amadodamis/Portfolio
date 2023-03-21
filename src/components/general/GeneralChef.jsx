import { Link } from "react-router-dom"
import fotoCheff from "../../img/cocinero.jpg"

export default function GeneralChef({ right,addRight,removeRight }) {
    return (
        <div className="split right" ref={right} onMouseEnter={addRight} onMouseLeave={removeRight}  >

            <img src={fotoCheff} alt={"foto-chef"} className="foto-general" />
            <h1 className="title-rol" >CHEFF</h1>
            <Link to={`cheff`}><div className="btn">Proyectos</div></Link>
        </div>
    )
}
