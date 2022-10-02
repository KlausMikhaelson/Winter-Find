import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Ticket from './Components/Ticket';
import Home from './Components/Home';



function App() {
  const slots = document.getElementsByClassName("slots")
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/tickets' element={<Ticket />} />
    </Routes>
    </>
  );
}

export default App;
