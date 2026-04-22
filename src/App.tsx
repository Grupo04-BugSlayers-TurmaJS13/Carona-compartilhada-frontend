import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutProject from "./pages/sobre/AboutProject";
import AboutUs from "./pages/sobre/AboutUs";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutProject />} />
        <Route path="/sobre" element={<AboutProject />} />
        <Route path="/sobrenos" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
