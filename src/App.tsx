import { BrowserRouter, Route, Routes } from "react-router-dom";


import { ToastContainer } from "react-toastify";
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Cadastro from "./pages/cadastro/Cadastro";
import Perfil from "./pages/perfil/Perfil";
import AtualizarPerfil from "./pages/perfil/AtualizarPerfil";

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
      
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastro />} />
          <Route path="/perfil/:id" element={<Perfil />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/atualizarusuario" element={<AtualizarPerfil />} />
        </Routes>
        
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;


