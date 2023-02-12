
import './css/App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Proyectos from './components/Proyectos';
import ChefLife from './components/ChefLife';

function App() {
  return (
    <div className="App-main">

        <Header/>

        <Banner/>

        <Proyectos/>
        
        <ChefLife/>
      
    </div>
  );
}

export default App;
