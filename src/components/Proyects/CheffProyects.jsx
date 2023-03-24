import "./proyects.css"

import { useState, useEffect } from "react"

import { changeRolImageCheff, inicializacionRol } from "../../JS/changeRolImageCheff"

import Arrows from "./CheffComponents/arrows"
import SlideActual from "./CheffComponents/slideActual"
import Rol from "./CheffComponents/Rol"



export default function ProyectsCheff() {

    const [rol, setRol] = useState("Cocinero")
    const [arrayProfesion, setArrayProfesion] = useState(inicializacionRol())
    const [bodyBackground, setbodyBackground] = useState(arrayProfesion[0])
    const [imageActual, setImageActual] = useState(arrayProfesion[0])

    useEffect(() => {
        console.log("entre")
        changeRolImageCheff(rol, setImageActual, setbodyBackground, setArrayProfesion)
    }, [rol])

    return (
        <div className='proyectsCheff' id="cheff" style={bodyBackground}>
            <div className='overlay-proyectoCheff'>

                <h1 className="title-proyects"> CHEFF</h1>

                <Rol
                    rol={rol}
                    setRol={setRol}
                />


                <SlideActual
                    imageActual={imageActual}
                />

                <Arrows
                    array={arrayProfesion}
                    imageActual={imageActual} setImageActual={setImageActual}
                    setbodyBackground={setbodyBackground}
                />

            </div>
        </div>
    )
}