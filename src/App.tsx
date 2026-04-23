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

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/listarveiculos" element={<ListarVeiculos />} />
          <Route path="/cadastrarveiculos" element={<FormVeiculo />} />
          <Route path="/atualizarveiculo/:id" element={<FormVeiculo />} />
          <Route path="/sobre" element={<AboutProject />} />
          <Route path="/sobrenos" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App
