import React from 'react'
import { useRef } from 'react'
import Español from "../img/banderas/español.png"
import Ingles from "../img/banderas/ingles.png"


export default function IconsLeng({ leng, setLeng }) {

    const iconEspañol = useRef()
    const iconIngles = useRef()

    const changeLeng = (e) => {
        let name = e.target.getAttribute('name')
        if (name === "español") {
            iconEspañol.current.classList.add("active-icon")
            iconIngles.current.classList.remove("active-icon")
            setLeng("ESP")
        }
        else {
            iconEspañol.current.classList.remove("active-icon")
            iconIngles.current.classList.add("active-icon")
            setLeng("ENG")
        }
    }


    return (
        <div className='iconos-leng-container'>
            <img src={Español} alt='bandera-español' className='icon-leng active-icon'
                ref={iconEspañol} name="español"
                onClick={changeLeng}
            />
            <img src={Ingles} alt='bandera-ingles' className='icon-leng'
                ref={iconIngles} name="english"
                onClick={changeLeng}
            />
        </div>
    )
}
