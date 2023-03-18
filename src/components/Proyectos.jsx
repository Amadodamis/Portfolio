import { useState } from "react";

import "../css/proyectosStyle.css"

import ListaProyectos from "./ListaProyectos";
import Slider from "./componentCarrousel/Slider"

//sliders cheff
import sliderCocinero from "./componentCarrousel/data-proyects/SliderImageCocinero"
import sliderPanadero from "./componentCarrousel/data-proyects/SliderImagePanadero"
import sliderPastelero from "./componentCarrousel/data-proyects/SliderImagePastelero"

//sliders developer
import sliderFaba from "./componentCarrousel/data-proyects/SliderImageFaba"
import sliderIg from "./componentCarrousel/data-proyects/SliderImageIg"


function Proyectos({ profesion, identificator, texto, mayus, proyectsName }) {


    //Inicializacion del primer Slider
    let sliderInicial
    if (profesion === "DESARROLLADOR") { sliderInicial = sliderFaba; }
    else { sliderInicial = sliderCocinero }

    const [proyectoActual, setProyectoActual] = useState(proyectsName[0])
    const [sliderActual, setSliderActual] = useState(sliderInicial)

    //html 
    let titulo = <h2 className="titulo">PROYECTOS COMO <span className="span-title-proyects">{profesion}</span> </h2>
    let descripcion = <p className="texto-proyect"><span className="primeraLetra">{mayus}</span> {texto} </p>

    const cambiarProyectoActual = e => {
        e.preventDefault()
        let nuevoProyecto = e.target.id
        setProyectoActual(nuevoProyecto)
        if (profesion === "CHEFF") {
            if (nuevoProyecto === "Panadero") {
                setSliderActual(sliderPanadero)
            }
            if (nuevoProyecto === "Pastelero") {
                setSliderActual(sliderPastelero)
            }
            if (nuevoProyecto === "Cocinero") {
                setSliderActual(sliderCocinero)
            }
        }
         else {
            if (nuevoProyecto === "Instagram Dashboard") {
                setSliderActual(sliderIg)
            }
            if (nuevoProyecto === "Fabastore")
                setSliderActual(sliderFaba)
        }
    }

    return (

        <article className="proyectos-style" id={identificator} >
            <br></br>

            {titulo}

            <ListaProyectos
                p={proyectsName}
                pActual={proyectoActual}
                cambiarProyectoActual={cambiarProyectoActual}
            />

            { /*la descripcion del proyecto actual */}
            <div className="container-descripcion">
                {descripcion}
            </div>

            <Slider
                profesion={profesion}
                pActual={proyectoActual}
                sliderActual={sliderActual}
            />


            <br />
        </article>

    );
}

export default Proyectos;