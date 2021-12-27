
import {Navbar} from "./components/Navbar";
import {Cardd} from './components/Card.jsx';
import './App.css';
import { PlusCard } from "./components/PlusCard";

const App = () => {    
  return (
        <>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="cards-div">
        <PlusCard/>
        <Cardd />
        <Cardd />
        <Cardd />
        <Cardd />
        <Cardd />
      </div>
        </>
  );
};

export default App;