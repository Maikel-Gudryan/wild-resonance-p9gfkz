import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createDenuncia, fetchTiposDenuncia } from '../api/api';
import '../css/NovaDenuncia.css';

export default function NovaDenuncia() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [tipos, setTipos] = useState([]);

  const [form, setForm] = useState({
    titulo: '',
    descricao: '',
    endereco_denuncia: '',
    tipo_denuncia_id: '',
    anonimo: false
  });

  useEffect(() => {
    const loadTipos = async () => {
      try {
        const data = await fetchTiposDenuncia();
        setTipos(data || []);
        if (data && data.length > 0) {
          setForm(prev => ({ ...prev, tipo_denuncia_id: data[0].id }));
        }
      } catch (error) {
        console.error('Erro ao carregar tipos:', error);
      }
    };
    loadTipos();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.titulo || !form.descricao || !form.endereco_denuncia || !form.tipo_denuncia_id) {
      setError('Preencha todos os campos');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await createDenuncia(form);
      navigate('/denuncias');
    } catch (error) {
      setError(error.message || 'Erro ao criar denúncia');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="nova-denuncia-container">
      <h2>📝 Nova Denúncia</h2>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="denuncia-form">
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            placeholder="Ex: Buraco na rua"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Descrição</label>
          <textarea
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            placeholder="Descreva o problema detalhadamente..."
            rows={4}
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Endereço</label>
          <input
            type="text"
            name="endereco_denuncia"
            value={form.endereco_denuncia}
            onChange={handleChange}
            placeholder="Rua, número, bairro..."
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Tipo de Denúncia</label>
          <select
            name="tipo_denuncia_id"
            value={form.tipo_denuncia_id}
            onChange={handleChange}
            disabled={loading}
          >
            {tipos.map((tipo) => (
              <option key={tipo.id} value={tipo.id}>
                {tipo.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group checkbox">
          <label>
            <input
              type="checkbox"
              name="anonimo"
              checked={form.anonimo}
              onChange={handleChange}
              disabled={loading}
            />
            Enviar anonimamente
          </label>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar Denúncia'}
        </button>
      </form>
    </div>
  );
}