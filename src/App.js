
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Sheard/Navbar';
import Home from './Pages/Home/Home';
// import About from './Pages/About';
import Login from './Pages/Auth/Login';
import Review from './Pages/Home/Review';
import ContactForm from './Pages/Home/ContactForm';
import Appointment from './Pages/Appointment/Appointment';
import Register from './Pages/Auth/Register';
import RequirAuth from './Pages/Auth/RequirAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={
          <RequirAuth>
            <Appointment />
          </RequirAuth>
        } />
        <Route path="/review" element={<Review />} />
        < Route path="/contact" element={<ContactForm />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
      <ToastContainer />
    </>

  );
}

export default App;
