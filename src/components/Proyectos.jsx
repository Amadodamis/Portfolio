import "../css/proyectosStyle.css"

import ListaProyectos from "./ListaProyectos";
import Slider from "./componentCarrousel/Slider"

function Proyectos(props) {
    const { profesion,identificator, 
        proyectsName} = props;
   
    
    


    //html 
    let texto = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    let mayus = "L"
    let titulo = <h2 className="titulo">PROYECTOS COMO <span className="span-title-proyects">{profesion}</span> </h2>
    let descripcion = <p className="texto-proyect"><span className="primeraLetra">{mayus}</span> {texto} </p>
        

  

    return (
        <article className="proyectos-style" id={identificator} >
            <br></br>

            {titulo}

            <ListaProyectos 
            p={proyectsName}
            />


            { /*la descripcion del proyecto actual */}      
            {descripcion}

            <Slider  />


            <br />
        </article>

    );
}

export default Proyectos;