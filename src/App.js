
import './css/App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Proyectos from './components/Proyectos';
import ChefLife from './components/ChefLife';

function App() {
  return (
    <div className="App-main">
        <br/>
        <Header/>
        <br/>
        <Banner/>

        <Proyectos/>
        
        <ChefLife/>
      
    </div>
  );
}

export default App;
