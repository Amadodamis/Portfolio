import "./proyects.css"

import { useState,useEffect } from "react"

import { panaderoArray, cocineroArray, pasteleroArray } from "../../JS/dataCoPasPan"


import Arrows from "./CheffComponents/arrows"
import SlideActual from "./CheffComponents/slideActual"
import Rol from "./CheffComponents/Rol"

export default function ProyectsCheff() {

    const [bodyBackground, setbodyBackground] = useState(cocineroArray[0])
    const [imageActual, setImageActual] = useState(cocineroArray[0])
    const [rol, setRol] = useState("cocinero")

    useEffect(() => {
        console.log("entre")
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
                    array={cocineroArray}
                    imageActual={imageActual} setImageActual={setImageActual}
                    setbodyBackground={setbodyBackground}
                />

            </div>
        </div>
    )
}