import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutProject from "./pages/sobre/AboutProject";
import AboutUs from "./pages/sobre/AboutUs";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import ListarVeiculos from "./components/veiculos/listarveiculos/ListarVeiculos";
import { AuthProvider } from "./contexts/AuthContext";
import FormVeiculo from "./components/veiculos/formveiculo/FormVeiculo";
import DeletarVeiculos from "./components/veiculos/deletarveiculos/DeletarVeiculos";
// import { ToastContainer } from "react-toastify";
import Cadastro from "./pages/cadastro/Cadastro";
import Perfil from "./pages/perfil/Perfil";
import AtualizarPerfil from "./pages/perfil/AtualizarPerfil";
import ListarUsuarios from "./components/usuarios/listausuario/ListarUsuarios";
import Viagens from "./components/viagens/listarviagens/Viagens";
import FormViagem from "./components/viagens/formviagem/FormViagem";
import DeletarViagem from "./components/viagens/deletarviagem/DeletarViagem";


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastro />} />
            <Route path="/perfil/:id" element={<Perfil />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/atualizarusuario" element={<AtualizarPerfil />} />
            <Route path="/listarusuarios" element={<ListarUsuarios />} />
            <Route path="/home" element={<Home />} />
            <Route path="/listarveiculos" element={<ListarVeiculos />} />
            <Route path="/cadastrarveiculos" element={<FormVeiculo />} />
            <Route path="/atualizarveiculo/:id" element={<FormVeiculo />} />
            <Route path="/deletarveiculo/:id" element={<DeletarVeiculos />} />
            <Route path="/sobre" element={<AboutProject />} />
            <Route path="/sobrenos" element={<AboutUs />} />
            <Route path="/listarviagens" element={<Viagens />} />
            <Route path="/cadastrarviagens" element={<FormViagem />} />
            <Route path="/atualizarviagens/:id" element={<FormViagem />} />
            <Route path="/deletarviagens/:id" element={<DeletarViagem />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
