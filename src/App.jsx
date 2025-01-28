import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Navbar from './components/Navbar';
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
     <Navbar/>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
       <Route path="dashboard" element={<Dashboard />} />
       <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
