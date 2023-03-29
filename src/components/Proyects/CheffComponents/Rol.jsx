import React from 'react'

export default function Rol({ rol, setRol, leng }) {

    const cambiarRol = (e) => {
        let name = e.target.getAttribute('name');
        if (name !== rol) {
            setRol(name)
        }
    }

    return (
        <div className='lista-proyectos'>
            <p className='proyects-name' onClick={cambiarRol} name="Cocinero">
                {leng === "ESP" ? "Cocinero" : "Cook"}
            </p>

            <p className='proyects-name' onClick={cambiarRol} name="Panadero">
                {leng === "ESP" ? "Panadero" : "Baker"}
            </p>

            <p className='proyects-name' onClick={cambiarRol} name="Pastelero">
                {leng === "ESP" ? "Pastelero" : "Pastry Chef"}
            </p>
        </div>
    )
}
