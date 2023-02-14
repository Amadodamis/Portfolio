
import './css/App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Proyectos from './components/Proyectos';


function App() {

  //let proyectosDesarrolador = ["Fabastore", "Instagram Dashboard"]
  let proyectosCheff = ["Cocinero", "Panadero", "Pastelero"]

  

  return (
    <div className="App-main">

      <Header />
      <Banner />

      
      <Proyectos
        profesion={"CHEFF"} identificator={"cheff"}
        proyectsName={proyectosCheff}
        
      />

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