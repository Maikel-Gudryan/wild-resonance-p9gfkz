import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Denuncias from "./pages/Denuncias";
import NovaDenuncia from "./pages/NovaDenuncia";
import Usuarios from "./pages/Usuarios";
import Departamentos from "./pages/Departamentos";


export default function App() {

  return (
    
    <div>
      <BrowserRouter>
        <Header />
        <Routes>  

          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/denuncias" element={<Denuncias />} />
          <Route path="/novadenuncias" element={<NovaDenuncia />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/departamentos" element={<Departamentos />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}