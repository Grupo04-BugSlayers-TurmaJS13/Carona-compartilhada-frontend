import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutProject from "./pages/sobre/AboutProject";
import AboutUs from "./pages/sobre/AboutUs";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutProject />} />
        <Route path="/sobre" element={<AboutProject />} />
        <Route path="/sobrenos" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;