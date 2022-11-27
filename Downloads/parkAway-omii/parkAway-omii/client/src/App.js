import './App.css';
import Login from './pages/Login/'
import NavBar from './components/NavBar/'
import Prizing from './pages/Prizing/'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import Adds from './pages/Listings/Adds';
import About from './pages/Contact/contact';
import { ContactUs } from './pages/Addlisting/Addlisting';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path='/pricing' element={<Prizing />} />
            <Route path='/Listings' element={<Adds />} />
            <Route path='/contact' element={<About />} />
            <Route path='/addList' element={<ContactUs />} />
        </Routes>
      {/* <Login /> */}
    </div>
  );
}

export default App;
