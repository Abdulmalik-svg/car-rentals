import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
// import Ourcustomers from "./Pages/Our customers";
import Navibar from './Components/Navbar';
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard";
import Payments from "./Components/Payments";
import Footer from "./Components/Footer";
import Aboutus from "./Components/AboutUs";
import Services from "./Pages/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navibar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="Payments" element={<Payments />} />
          <Route path="*" element={<NotFound />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="Services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
