
import './css/App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Proyectos from './components/Proyectos';


function App() {


  return (
    <div className="App-main">
       
        <Header/> 
        <Banner /> 
        <Proyectos profesion={"DESARROLLADOR"} proyecto1={"Fabastore"} proyecto2={"Instagram Dashboard"} proyecto3={"Recetario"} proyecto4={"Portfolio"} />

        <Proyectos profesion={"CHEFF"} proyecto1={"Cocinero"} proyecto2={"Panadero"} proyecto3={"Pastelero"} proyecto4={"asd"}/>
       
    </div>
  );
}

export default App;
