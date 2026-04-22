<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Teste from './pages/teste'
import Home from './pages/home/Home'
import ListarVeiculos from './components/veiculos/listarveiculos/ListarVeiculos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/listarveiculo" element={<ListarVeiculos />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </BrowserRouter>
  )
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teste from "./pages/teste";

import { ToastContainer } from "react-toastify";
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
      
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/teste" element={<Teste />} />
        </Routes>
        
      </BrowserRouter>
    </AuthProvider>
  );
>>>>>>> origin/login_Cadastro_Perfil
}

export default App;
