
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Sheard/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login';
import ContactForm from './Pages/Home/ContactForm';
import Appointment from './Pages/Appointment/Appointment';
import Register from './Pages/Auth/Register';
import RequirAuth from './Pages/Auth/RequirAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyHistory from './Pages/Dashboard/MyHistory';
import About from './Pages/About/About';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';



function App() {
  return (
    <>
      <div className='max-w-7xl mx-auto px-12'>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="appointment" element={
            <RequirAuth>
              <Appointment />
            </RequirAuth>
          } />
          <Route path="dashboard" element={<RequirAuth><Dashboard /></RequirAuth>} >
            <Route index element={<MyAppointments></MyAppointments>}></Route>
            <Route path="review" element={<MyReview></MyReview>}></Route>
            <Route path="history" element={<MyHistory></MyHistory>}></Route>
          </Route>
          < Route path="contact" element={<ContactForm />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Routes>
        <ToastContainer />
      </div>
    </>

  );
}

export default App;

