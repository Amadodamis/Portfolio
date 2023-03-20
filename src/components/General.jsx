import "../css/general.css"
import { useRef } from "react"
import { Link } from "react-router-dom"
import fotoDeveloper from "../img/fotocv.jpg"
import fotoCheff from "../img/cocinero.jpg"


export default function General() {
    const container = useRef(null)
    const left = useRef(null)
    const right = useRef(null)

    const removeLeft = () => {
        container.current.classList.remove('hover-left')
    }

    const addLeft = () => {
        container.current.classList.add('hover-left')
    }
    const removeRight = () => {

        container.current.classList.remove('hover-right')
    }

    const addRight = () => {

        container.current.classList.add('hover-right')
    }

    return (
        <div className="body">
            <div className="container" ref={container}>

                <div className="split left" ref={left} onMouseEnter={addLeft} onMouseLeave={removeLeft} >


                    <img src={fotoDeveloper} alt={"fotodevelopers"} className="foto-general" />
                    <h1>DEVELOPER</h1>
                    <Link to={`developer`}><div className="btn">Portfolio</div></Link>

                </div>

                <div className="split right" ref={right} onMouseEnter={addRight} onMouseLeave={removeRight}  >

                    <img src={fotoCheff} alt={"fotodevelopers"} className="foto-general" />
                    <h1>CHEFF</h1>
                    <Link to={`Cheff`}><div className="btn">Portfolio</div></Link>
                </div>
            </div>
        </div>
    )
}
