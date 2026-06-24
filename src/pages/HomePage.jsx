import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDenuncias } from '../api/api';
import '../css/HomePage.css';

export default function HomePage() {
  const [stats, setStats] = useState({ total: 0, pendentes: 0, resolvidas: 0 });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const denuncias = await fetchDenuncias();
        const total = denuncias.length;
        const pendentes = denuncias.filter(d => d.status === 'Pendente').length;
        const resolvidas = denuncias.filter(d => d.status === 'Resolvido').length;
        setStats({ total, pendentes, resolvidas });
      } catch (error) {
        console.error('Erro ao carregar estatísticas:', error);
      }
    };
    loadStats();
  }, []);

  return (
    <div className="home-container">
      <section className="welcome">
        <h1>Bem-vindo ao Prefeitura+</h1>
        <p>Ajude a melhorar sua cidade registrando problemas urbanos</p>
      </section>

      <section className="cards-grid">
        <Link to="/novadenuncias" className="card">
          <div className="card-icon">📝</div>
          <h3>Nova Denúncia</h3>
          <p>Registre um problema na sua rua ou bairro</p>
        </Link>

        <Link to="/denuncias" className="card">
          <div className="card-icon">📋</div>
          <h3>Minhas Denúncias</h3>
          <p>Acompanhe o status dos seus chamados</p>
        </Link>

        <Link to="/departamentos" className="card">
          <div className="card-icon">🏛️</div>
          <h3>Departamentos</h3>
          <p>Encontre os órgãos responsáveis</p>
        </Link>
      </section>

      <section className="stats">
        <h2>📊 Estatísticas</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">{stats.total}</span>
            <span className="stat-label">Total de Denúncias</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.pendentes}</span>
            <span className="stat-label">Pendentes</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.resolvidas}</span>
            <span className="stat-label">Resolvidas</span>
          </div>
        </div>
      </section>
    </div>
  );
}