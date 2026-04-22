import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teste from "./pages/teste";

import { ToastContainer } from "react-toastify";
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Cadastro from "./pages/cadastro/Cadastro";

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
      
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastro />} />
          <Route path="/teste" element={<Teste />} />
        </Routes>
        
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
