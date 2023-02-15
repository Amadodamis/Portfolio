
import './css/App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Proyectos from './components/Proyectos';
import Footer from './components/Footer';

function App() {

  let proyectosDesarrolador = ["Fabastore", "Instagram Dashboard"]
  let proyectosCheff = ["Cocinero", "Panadero", "Pastelero"]

  let textoDesarrollador="abaStore fue mi primero proyecto, en conjunto con 2 compañeros mientras terminabamos el curso de Desarrollo Full Stack en Digital House. Aunque tiene muchos errores, y no es muy estetico, logramos trabajar en equipo con metodologia Scrum. Utilizamos Express, cookies, session, Nodejs, SQL con Deaver y Xampp."
  let mayusDes="F"
  let textoGastronomia="iempre me gustó cocinar, es algo que está en mí desde muy chico. Lo que más me gustó siempre fue recrear platos típicos de la gastronomía Argentina y llevarlos a la vanguardia.Mi experiencia como Panadero fue una de las más positivas de mi vida, ya que fue mi primer negocio, en el cual me encargue de la elaboración de panes, distribuirlos, hacer su publicidad y costos. Mi carrera como pastelero es corta; pero siempre en las mejores maneras de sorprender. Mis postres no son típicos, siempre jugando con gustos salados, como puede ser chocolate con oliva, o granitas de cilantro. La pastelería está evolucionando y sin lugar a dudas estoy en ese lugar."
  let mayusGastro="S"


  return (
    <div className="App-main">

      <Header />
      <Banner />
      <Proyectos profesion={"DESARROLLADOR"} identificator={"developer"}
        texto={textoDesarrollador} mayus={mayusDes}
        proyectsName={proyectosDesarrolador}
      />

      <Proyectos
        profesion={"CHEFF"} identificator={"cheff"}
        texto={textoGastronomia} mayus={mayusGastro}
        proyectsName={proyectosCheff}
      />

    <Footer />
    </div>
  );
}

export default App;


/**
 
<Proyectos profesion={"DESARROLLADOR"} identificator={"developer"}
        proyectsName={proyectosDesarrolador}
        faba={faba}
        ig={ig}
        arrayProyects={arrayProyectosDev}
      />


 */