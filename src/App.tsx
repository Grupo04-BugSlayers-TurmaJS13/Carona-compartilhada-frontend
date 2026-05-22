import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import Perfil from "./pages/perfil/Perfil";
import AtualizarPerfil from "./pages/perfil/AtualizarPerfil";
import ListarUsuarios from "./components/usuarios/listausuario/ListarUsuarios";
import ListarVeiculos from "./components/veiculos/listarveiculos/ListarVeiculos";
import FormVeiculo from "./components/veiculos/formveiculo/FormVeiculo";
import DeletarVeiculos from "./components/veiculos/deletarveiculos/DeletarVeiculos";
import Viagens from "./components/viagens/listarviagens/Viagens";
import FormViagem from "./components/viagens/formviagem/FormViagem";
import DeletarViagem from "./components/viagens/deletarviagem/DeletarViagem";
import AboutProject from "./pages/sobre/AboutProject";
import AboutUs from "./pages/sobre/AboutUs";
import ContratarViagem from "./components/viagens/contratarviagem/ContratarViagem";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/perfil/:id" element={<Perfil />} />
          <Route path="/atualizarusuario" element={<AtualizarPerfil />} />
          <Route path="/listarusuarios" element={<ListarUsuarios />} />
          <Route path="/listarveiculos" element={<ListarVeiculos />} />
          <Route path="/cadastrarveiculos" element={<FormVeiculo />} />
          <Route path="/atualizarveiculo/:id" element={<FormVeiculo />} />
          <Route path="/deletarveiculo/:id" element={<DeletarVeiculos />} />
          <Route path="/viagens" element={<Navigate to="/listarviagens" replace />} />
          <Route path="/listarviagens" element={<Viagens />} />
          <Route path="/cadastrarviagens" element={<FormViagem />} />
          <Route path="/atualizarviagens/:id" element={<FormViagem />} />
          <Route path="/deletarviagens/:id" element={<DeletarViagem />} />
          <Route path="/contratarviagem/:id" element={<ContratarViagem />} />
          <Route path="/sobre" element={<AboutProject />} />
          <Route path="/sobrenos" element={<AboutUs />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;