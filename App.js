import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Add from './components/Add';


function App() {
  return (
   
    <div className='App'>
        <Add/>
        <Nav/>
    </div>
  );
}

export default App;