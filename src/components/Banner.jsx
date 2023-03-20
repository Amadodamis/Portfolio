import "../css/BannerStyle.css"

import foto from "../img/fotocv.jpg"
import { tituloDev, textoDev, tituloG, textoG } from "../JS/dataBanner"


export default function Banner() {

    let fotoUser = <img src={foto} alt="fotoCv" className="foto" />

    return (
        <div className="Banner" id={"aboutMe"}>

            <div className='container-foto-cv'>{fotoUser}</div>

            <div className="container-col2">

                <h2 className="titulo-banner">About</h2>
                <span className="underline"></span>

                <div className="container-about">
                    <p className="texto">{tituloDev} </p>
                    <p className="texto">{textoDev} </p>
                </div>
            </div>

        </div>
    );
}