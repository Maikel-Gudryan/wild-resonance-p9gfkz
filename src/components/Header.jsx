import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, setAuthToken } from '../api/api';
import '../css/Header.css';

export default function Header() {
  const navigate = useNavigate();
  const loggedIn = isAuthenticated();

  const handleLogout = () => {
    setAuthToken(null);
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">🏛️ Prefeitura+</Link>
        {loggedIn ? (
          <nav>
            <Link to="/">Início</Link>
            <Link to="/denuncias">Denúncias</Link>
            <Link to="/novadenuncias">Nova</Link>
            <Link to="/departamentos">Departamentos</Link>
            <Link to="/usuarios">Usuários</Link>
            <button onClick={handleLogout} className="btn-logout">Sair</button>
          </nav>
        ) : (
          <nav>
            <Link to="/login">Entrar</Link>
          </nav>
        )}
      </div>
    </header>
  );
}