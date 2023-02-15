import foto from "../img/fotocv.jpg"
import "../css/BannerStyle.css"

function Banner() {

    let fotoUser = <img src={foto} alt="fotoCv" className="foto" />
    let tituloDev = "Desarrollador Full Stack Jr:"
    let textoDev = "Tengo 1 año de experiencia en proyectos propios, conocimientos en Express,Javascript, Node JS, CSS, Tailwind, bootstrap, Bases de datos relacionales y no relacionales (MongoDB y SQL), Chakra UI, Scrum y mi tecnología favorita es React. "
    let tituloG = "Profesional Gastronómico:"
    let textoG = "Tengo 5 años de experiencia de trabajo en gastronomía, trabajé en Restaurantes de gastronomía molecular, salón de eventos de 500 a 1000 personas por día, casa de viandas y mi propia panadería.  "

    return (
        <div className="Banner" id={"aboutMe"}>

            <div className='container-foto-cv'>{fotoUser}</div>

            <div className="container-col2">

                <h2 className="titulo-banner">About</h2>
                <span className="underline"></span>

                <div className="container-about">
                    <p className="texto">{tituloDev} </p>
                    <p className="texto">{textoDev} </p>
                    <p className="texto">{tituloG} </p>
                    <p className="texto">{textoG} </p>
                </div>

            </div>

        </div>
    );
}

export default Banner;