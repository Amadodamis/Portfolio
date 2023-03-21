import { Link } from "react-router-dom"
import fotoDeveloper from "../../img/fotocv.jpg"

export default function GeneralDev({ left, addLeft, removeLeft }) {
    return (
        <div className="split left" ref={left} onMouseEnter={addLeft} onMouseLeave={removeLeft} >
            <img src={fotoDeveloper} alt={"foto-developers"} className="foto-general" />
            <h1 className="title-rol">DEVELOPER</h1>
            <Link to={`developer`}><div className="btn">Proyectos</div></Link>

        </div>
    )
}
