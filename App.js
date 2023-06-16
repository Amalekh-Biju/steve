import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

import Add from './components/Add';


function App() {
  return (
   
    <div className='App'>
      <NavBar />
     <Add/>
         </div>
  );
}

export default App;