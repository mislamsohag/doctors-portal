
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
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';



function App() {
  return (
    <>
      <div className='max-w-7xl mx-auto px-10'>
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
            <Route path="payment/:id" element={<Payment />}></Route>
            <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
            <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
            <Route path="manageDoctors" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
          </Route>
          < Route path="contact" element={<ContactForm />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
        <ToastContainer />
      </div>
      <footer className='py-5 text-center text-white bg-slate-700'>
        <p>Copyright &copy; 2022 - All right reserved By <span className='text-green-400'>Md. Fakrul Islam Chowdhury</span></p>
      </footer>
    </>

  );
}

export default App;

