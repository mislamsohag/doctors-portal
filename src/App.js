
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Sheard/Navbar';
import Home from './Pages/Home/Home';

import About from './Pages/About';
import Login from './Pages/Auth/Login';
import MakeAppointment from './Pages/Home/MakeAppointment';
import Review from './Pages/Home/Review';
import ContactForm from './Pages/Home/ContactForm';



function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/apointment" element={<MakeAppointment />} />
        <Route path="/review" element={<Review />} />
        < Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>

  );
}

export default App;
