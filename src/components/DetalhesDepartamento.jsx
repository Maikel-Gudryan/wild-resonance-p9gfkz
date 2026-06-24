import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchDepartamentos } from '../api/api';
import '../css/Departamentos.css';

export default function DetalhesDepartamento() {
  const { id } = useParams();
  const [departamento, setDepartamento] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadDepartamento = async () => {
      try {
        setLoading(true);
        const data = await fetchDepartamentos();
        const encontrado = data.find(dep => dep.id === parseInt(id));
        if (encontrado) {
          setDepartamento(encontrado);
        } else {
          setError('Departamento não encontrado');
        }
      } catch (error) {
        setError(error.message || 'Erro ao carregar departamento');
      } finally {
        setLoading(false);
      }
    };
    loadDepartamento();
  }, [id]);

  if (loading) return <div className="loading">Carregando...</div>;

  if (error) return (
    <div className="error-container">
      <div className="error-message">{error}</div>
      <Link to="/departamentos" className="btn-voltar">Voltar para Departamentos</Link>
    </div>
  );

  if (!departamento) return (
    <div className="error-container">
      <div className="error-message">Departamento não encontrado</div>
      <Link to="/departamentos" className="btn-voltar">Voltar para Departamentos</Link>
    </div>
  );

  return (
    <div className="detalhes-departamento-container">
      <Link to="/departamentos" className="btn-voltar">← Voltar</Link>
      
      <div className="departamento-detalhes">
        <div className="departamento-header">
          <h2>{departamento.nome}</h2>
          <span className="status-badge ativo">Ativo</span>
        </div>

        <div className="departamento-info">
          <div className="info-item">
            <span className="info-label">📍 Endereço</span>
            <span className="info-value">{departamento.endereco || 'Não informado'}</span>
          </div>

          <div className="info-item">
            <span className="info-label">📞 Telefone</span>
            <span className="info-value">{departamento.telefone || 'Não informado'}</span>
          </div>

          <div className="info-item">
            <span className="info-label">📧 Email</span>
            <span className="info-value">{departamento.email || 'Não informado'}</span>
          </div>

          <div className="info-item">
            <span className="info-label">🕐 Horário de Funcionamento</span>
            <span className="info-value">{departamento.horario_funcionamento || 'Não informado'}</span>
          </div>

          <div className="info-item">
            <span className="info-label">👤 Responsável</span>
            <span className="info-value">{departamento.responsavel || 'Não informado'}</span>
          </div>
        </div>

        <div className="departamento-acoes">
          <Link to={`/departamentos/${id}/editar`} className="btn-editar">
            ✏️ Editar
          </Link>
          <Link to="/novadenuncias" className="btn-denunciar">
            📝 Fazer Denúncia
          </Link>
        </div>
      </div>
    </div>
  );
}