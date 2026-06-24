import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './api/api';
import Header from './components/Header';
import PrivateRoute from './Pages/PrivateRoute';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import HomePage from './Pages/HomePage';
import Denuncias from './Pages/Denuncias';
import NovaDenuncia from './Pages/NovaDenuncia';
import Departamentos from './Pages/Departamentos';
import Usuarios from './Pages/Usuarios';
import DetalhesDepartamento from './components/DetalhesDepartamento';
import './css/global.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/denuncias" element={<PrivateRoute><Denuncias /></PrivateRoute>} />
          <Route path="/novadenuncias" element={<PrivateRoute><NovaDenuncia /></PrivateRoute>} />
          <Route path="/denuncias/nova" element={<PrivateRoute><NovaDenuncia /></PrivateRoute>} />
          <Route path="/departamentos" element={<PrivateRoute><Departamentos /></PrivateRoute>} />
          <Route path="/departamentos/:id" element={<PrivateRoute><DetalhesDepartamento /></PrivateRoute>} />
          <Route path="/usuarios" element={<PrivateRoute><Usuarios /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;