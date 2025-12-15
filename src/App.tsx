import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home_page from './pages/Home_page';
import Login_page from './pages/Login_page';
import Registration_page from './pages/Registration_page';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/dash" && <Header />}

      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/loginpage" element={<Login_page />} />
        <Route path="/registration" element={<Registration_page />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default App
