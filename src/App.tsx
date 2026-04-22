import { ToastContainer } from "react-toastify";
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teste from "./pages/teste";
import Home from "./pages/home/Home";
import ListarVeiculos from "./components/veiculos/listarveiculos/ListarVeiculos";

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
      
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/listarveiculo" element={<ListarVeiculos />} />
          <Route path="/teste" element={<Teste />} />
        </Routes>
        
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
