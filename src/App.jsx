import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Our customers";

import Navibar from './components/Navbar';
import NotFound from "./pages/NotFound";
import Card from "./components/Gallery";
import Gallery from "./components/Gallery";
import History from "./components/History";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Ourcustomers from "./pages/Our customers";
function App() {
  return (
    <>
     
     <BrowserRouter>
     <Navibar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="Ourcustomers" element={<Ourcustomers />} />
       <Route path="Gallery" element={<Gallery />} />
       <Route path="dashboard" element={<Dashboard />} />
       <Route path="blog" element={<Blog />} />
       <Route path="history" element={<History />} />
       <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
