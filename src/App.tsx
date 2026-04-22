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
      <div className="">
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/teste" element={<Teste />} />
        </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
