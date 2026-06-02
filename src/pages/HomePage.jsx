import "../home.css";
import { useNavigate, link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container">
      <section className="perfil">
        <div className="perfil-left">
          <div className="avatar">👤</div>

          <div>
            
            <h2>Cidadão Ativo</h2>

            <div className="infos">
                <span className="cargo">FUNCIONÁRIO</span>
                <span>ID #123</span>
            </div>
          </div>
        </div>

        <a href="/Usuarios" className="btn-gerenciar">⚙ Gerenciar Tipos</a>
      </section>

      <section className="cards">
         <a href="/novadenuncia">
          <div className="card ativo">
           
              <h3>Registrar Nova Denúncia</h3>

              <p>Informe irregularidades na sua rua ou bairro.</p>
          </div>
        </a>
        <a href="/denuncias">
          <div className="card">
              <h3>Minhas Denúncias</h3>

              <p>Acompanhe o status e as atualizações dos seus chamados.</p>
          </div>
        </a>
        <a href="/departamento">
          <div className="card">
              <h3>Departamentos</h3>

              <p>Encontre contatos e endereços dos órgãos municipais.</p>  
          </div>
        </a>
      </section>

      <section className="denuncias">
        <div className="titulo-area">
          <h2>Denúncias Recentes</h2>

          <a href="/Denuncias">Ver tudo →</a>
        </div>
        
        <div className="denuncias-grid">
          <div className="denuncia-card">
            <span className="status aberto">Em Aberto</span>

            <h4>Não definido</h4>

            <p>Nao definido</p>
          </div>

          <div className="denuncia-card">
            <span className="status analise">Em Análise</span>

            <h4>Não definido</h4>

            <p>Não definido</p>
          </div>

          <div className="denuncia-card">
            <span className="status concluido">Concluído</span>

            <h4>Não definido</h4>

            <p>Não definido</p>
          </div>

          <div className="denuncia-card">
            <span className="status aberto">Em Aberto</span>

            <h4>Não definido</h4>

            <p>Não definido</p>
          </div>
        </div>
      </section>
    </div>
  );
}
