import React from 'react'
import AboutMe from './AboutMe'
import Proyectos from './Proyectos'
import { useParams } from "react-router-dom";

export default function Rol() {

    let paramProfesion = useParams()
    let profesion = paramProfesion.profesion;

    if (profesion !== "developer" && profesion !== "cheff") return <p>No se encontro la pagina</p>

    return (
        <>
            <AboutMe
                profesion={profesion}
            />
            <Proyectos
                profesion={profesion}
            />
        </>
    )
}