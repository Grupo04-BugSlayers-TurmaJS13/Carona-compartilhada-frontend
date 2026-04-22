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
}

export default App