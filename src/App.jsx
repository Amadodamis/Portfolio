
import './css/App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Proyectos from './components/Proyectos';
import Footer from './components/Footer';

import { proyectosCheff, proyectosDesarrolador, textoDesarrollador, textoGastronomia} from './JS/data';

function App() {


  return (
    <div className="App-main">
      <Header />
      <Banner />
      <Proyectos profesion={"DESARROLLADOR"} identificator={"developer"}
        texto={textoDesarrollador} 
        proyectsName={proyectosDesarrolador}
      />

      <Proyectos
        profesion={"CHEFF"} identificator={"cheff"}
        texto={textoGastronomia} 
        proyectsName={proyectosCheff}
      />
      <Footer />
    </div>
  );
}

export default App;
