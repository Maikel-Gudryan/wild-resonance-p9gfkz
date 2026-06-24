import { useEffect, useState } from 'react';
import { fetchUsuarios } from '../api/api';
import '../css/Usuarios.css';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchUsuarios();
        setUsuarios(data || []);
      } catch (error) {
        setError(error.message || 'Erro ao carregar usuários');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <div className="loading">Carregando...</div>;

  return (
    <div className="usuarios-container">
      <h2>👤 Usuários</h2>

      {error && <div className="error-message">{error}</div>}

      {usuarios.length === 0 ? (
        <p className="empty">Nenhum usuário cadastrado.</p>
      ) : (
        <table className="usuarios-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Papel</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nome}</td>
                <td>{user.email}</td>
                <td><span className={`role-badge ${user.papel}`}>{user.papel}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}