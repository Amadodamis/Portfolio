import React from 'react'

export default function Rol({ rol, setRol }) {

    const cambiarRol = (e) => {
        let name = e.target.getAttribute('name');
        if (name !== rol) {
            setRol(name)
        }
    }

    return (
        <div className='lista-proyectos'>
            <p className='proyects-name' onClick={cambiarRol} name="Cocinero">Cocinero</p>

            <p className='proyects-name'  onClick={cambiarRol} name="Panadero">Panadero</p>

            <p className='proyects-name'  onClick={cambiarRol} name="Pastelero">Pastelero</p>
        </div>
    )
}
