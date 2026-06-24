import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchDepartamentos } from '../api/api';
import '../css/Departamentos.css';

export default function Departamentos() {
  const [departamentos, setDepartamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchDepartamentos();
        setDepartamentos(data || []);
      } catch (error) {
        setError(error.message || 'Erro ao carregar departamentos');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <div className="loading">Carregando...</div>;

  return (
    <div className="departamentos-container">
      <h2>🏛️ Departamentos</h2>

      {error && <div className="error-message">{error}</div>}

      {departamentos.length === 0 ? (
        <p className="empty">Nenhum departamento cadastrado.</p>
      ) : (
        <div className="departamentos-grid">
          {departamentos.map((dep) => (
            <Link to={`/departamentos/${dep.id}`} key={dep.id} className="departamento-card-link">
              <div className="departamento-card">
                <h3>{dep.nome}</h3>
                <p>📍 {dep.endereco}</p>
                <p>🕐 {dep.horario_funcionamento}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}