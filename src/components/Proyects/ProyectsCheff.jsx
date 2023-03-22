import "./proyects.css"

import { useState, useEffect } from "react"

import { panaderoArray, cocineroArray, pasteleroArray } from "../../JS/dataCoPasPan"


import Arrows from "./CheffComponents/arrows"
import SlideActual from "./CheffComponents/slideActual"
import Rol from "./CheffComponents/Rol"

export default function ProyectsCheff() {

    const [rol, setRol] = useState("cocinero")
    const [arrayProfesion, setArrayProfesion] = useState(cocineroArray)
    const [bodyBackground, setbodyBackground] = useState(arrayProfesion[0])
    const [imageActual, setImageActual] = useState(arrayProfesion[0])

    useEffect(() => {
        if (rol === "Cocinero") {
            setImageActual(cocineroArray[0])
            setbodyBackground(cocineroArray[0])
            setArrayProfesion(cocineroArray)
        } else {

            if (rol === "Pastelero") {
                setImageActual(pasteleroArray[0])
                setbodyBackground(pasteleroArray[0])
                setArrayProfesion(pasteleroArray)
            } else {
                setImageActual(panaderoArray[0])
                setbodyBackground(panaderoArray[0])
                setArrayProfesion(panaderoArray)
            }
        }


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