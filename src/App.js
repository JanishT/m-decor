import logo from './logo.svg';
import './App.css';
import Navbar from './COMPONENTS/Navbar';
import Banner from './COMPONENTS/Banner';
import Collections from './COMPONENTS/Collections';
import Mission from './COMPONENTS/Mission';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Collections/>
    <Mission/>
   

    </div>
  );
}

export default App;
