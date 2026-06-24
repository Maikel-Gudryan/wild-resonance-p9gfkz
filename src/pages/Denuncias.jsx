import { useEffect, useState } from 'react';
import { fetchDenuncias, confirmarDenuncia } from '../api/api';
import '../css/Denuncias.css';

export default function Denuncias() {
  const [denuncias, setDenuncias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadDenuncias();
  }, []);

  const loadDenuncias = async () => {
    try {
      setLoading(true);
      const data = await fetchDenuncias();
      setDenuncias(data || []);
    } catch (error) {
      setError(error.message || 'Erro ao carregar denúncias');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmar = async (id) => {
    try {
      await confirmarDenuncia(id);
      await loadDenuncias();
    } catch (error) {
      alert(error.message || 'Erro ao confirmar');
    }
  };

  const getStatusClass = (status) => {
    const map = {
      'Pendente': 'status-pendente',
      'Em análise': 'status-analise',
      'Resolvido': 'status-resolvido'
    };
    return map[status] || 'status-pendente';
  };

  if (loading) return <div className="loading">Carregando...</div>;

  return (
    <div className="denuncias-container">
      <h2>📋 Denúncias</h2>

      {error && <div className="error-message">{error}</div>}

      {denuncias.length === 0 ? (
        <p className="empty">Nenhuma denúncia encontrada.</p>
      ) : (
        <div className="denuncias-list">
          {denuncias.map((denuncia) => (
            <div key={denuncia.id} className="denuncia-card">
              <div className="denuncia-header">
                <h3>{denuncia.titulo}</h3>
                <span className={`status-badge ${getStatusClass(denuncia.status)}`}>
                  {denuncia.status}
                </span>
              </div>
              <p className="denuncia-desc">{denuncia.descricao}</p>
              <p className="denuncia-endereco">📍 {denuncia.endereco_denuncia}</p>
              <div className="denuncia-footer">
                <span>Prioridade: {denuncia.prioridade || 1}</span>
                <button
                  className="btn-confirmar"
                  onClick={() => handleConfirmar(denuncia.id)}
                >
                  ✅ Confirmar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}