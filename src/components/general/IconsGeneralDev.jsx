import React from 'react'
import icons from "../../JS/arrayIconsGeneralDev"
export default function IconsGeneralDev() {
    return (
        <div className='container-icons-general'>
            {
                icons.map((icon, i) =>
                    <img src={icon} className='icon-general' key={i} />
                )
            }
        </div>
    )
}
