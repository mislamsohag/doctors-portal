
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Sheard/Navbar';
import Home from './Pages/Home/Home';
import Apointment from './Pages/Apointment';
// import Review from './Pages/Review';
import Contacts from './Pages/Contacts';
import About from './Pages/About';
import Login from './Pages/Auth/Login';



function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/apointment" element={<Apointment />} />
        {/* <Route path="/review" element={<Review />} /> */}
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>

  );
}

export default App;
