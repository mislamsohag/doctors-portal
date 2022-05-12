import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Sheard/Navbar/Navbar';
import Apointment from './Pages/Apointment.js/Apointment';
import Review from './Pages/Review/Review';
import Contacts from './Pages/Contacts/Contacts';
import Login from './Pages/Auth/Login/Login';
import About from './Pages/About/About';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/apointment" element={<Apointment />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>

  );
}

export default App;
