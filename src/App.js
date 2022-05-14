
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Sheard/Navbar';
import Home from './Pages/Home/Home';
// import About from './Pages/About';
import Login from './Pages/Auth/Login';
import Review from './Pages/Home/Review';
import ContactForm from './Pages/Home/ContactForm';
import Appointment from './Pages/Appointment/Appointment';



function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/apointment" element={<Appointment />} />
        <Route path="/review" element={<Review />} />
        < Route path="/contact" element={<ContactForm />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>

  );
}

export default App;
