import "../css/aboutMe.css"
import { getFoto, getTexto, getTitulo } from "../JS/dataAbout";

export default function aboutCheff({ profesion }) {

    return (
        <div className="Banner" >
            <div className='container-foto-cv'>
                <img src={getFoto(profesion)} alt="fotoCv" className="foto" />
            </div>

            <div className="container-col2">

                <h2 className="titulo-banner">AMADO DAMIS</h2>
              

                <div className="container-about">
                    <p className="texto">{getTitulo(profesion)} </p>
                    <p className="texto">{getTexto(profesion)} </p>
                </div>
            </div>

        </div>
    );
}