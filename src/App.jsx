import './css/App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Proyectos from './components/Proyectos';
import Footer from './components/Footer';

import {proyectosDesarrolador, textoDesarrollador } from './JS/data';

export default function App() {

  return (
    <div className="App-main">
      <Header />
      <Footer />
    </div>
  );
}
