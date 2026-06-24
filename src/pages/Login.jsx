import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUsuario, setAuthToken, extractAuthToken } from '../api/api';
import '../css/Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !senha) {
      setErro('Preencha todos os campos');
      return;
    }

    setLoading(true);
    setErro('');

    try {
      const response = await loginUsuario(email, senha);
      const token = extractAuthToken(response);
      if (!token) {
        throw new Error('Resposta de login inválida');
      }
      setAuthToken(token);
      navigate('/');
    } catch (error) {
      setErro(error.message || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Iniciar Sessão</h2>
        <p>Faça login para continuar</p>

        {erro && <div className="error-message">{erro}</div>}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email..."
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha..."
              disabled={loading}
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <Link to="/cadastro" className="register-link">Criar conta</Link>
      </div>
    </div>
  );
}