
import './css/App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Proyectos from './components/Proyectos';

import cocinero from "./database/cocinero"
import faba from "./database/fabastore"
import ig from "./database/ig"
import panadero from "./database/panadero"
import pastelero from "./database/pastelero"

function App() {

  let proyectosDesarrolador = ["fabastore", "Instagram Dashboard"]
  let proyectosCheff = ["Cocinero", "Panadero", "Pastelero"]

  /*
  const usuariosFilePath = path.join(__dirname, '../data/usersDataBase.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
*/
  return (
    <div className="App-main">
      <Header />
      <Banner />

      <Proyectos profesion={"DESARROLLADOR"} identificator={"developer"}
        proyecto1={"Fabastore"} proyecto2={"Instagram Dashboard"} proyecto3={"Recetario"} proyecto4={"Portfolio"}
        proyects={proyectosDesarrolador}
      />

      <Proyectos
        profesion={"CHEFF"} identificator={"cheff"}
        proyecto1={"Cocinero"} proyecto2={"Panadero"} proyecto3={"Pastelero"} proyecto4={"asd"}
        proyects={proyectosCheff}
      />
    </div>
  );
}

export default App;


/**
 




 */