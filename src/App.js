
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Sheard/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login';
import ContactForm from './Pages/Home/ContactForm';
import Appointment from './Pages/Appointment/Appointment';
import RequireAuth from './Pages/Auth/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyHistory from './Pages/Dashboard/MyHistory';
import About from './Pages/About/About';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import SignUp from './Pages/Auth/SignUp';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Auth/RequierAdmin';



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
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          } />
          <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
            <Route index element={<MyAppointments />}></Route>
            <Route path="review" element={<MyReview />}></Route>
            <Route path="history" element={<MyHistory />}></Route>
            <Route path="users" element=
              {
                <RequireAdmin>
                  <Users></Users>
                </RequireAdmin>
              }
            ></Route>
          </Route>
          < Route path="contact" element={<ContactForm />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
        <ToastContainer />
      </div>
    </>

  );
}

export default App;

