import "../home.css";

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

        <button className="btn-gerenciar">⚙ Gerenciar Tipos</button>
      </section>

      <section className="cards">
        <div className="card ativo">
          <h3>Registrar Nova Denúncia</h3>

          <p>Informe irregularidades na sua rua ou bairro.</p>
        </div>

        <div className="card">
          <h3>Minhas Denúncias</h3>

          <p>Acompanhe o status e as atualizações dos seus chamados.</p>
        </div>

        <div className="card">
          <h3>Departamentos</h3>

          <p>Encontre contatos e endereços dos órgãos municipais.</p>
        </div>
      </section>

      <section className="denuncias">
        <div className="titulo-area">
          <h2>Denúncias Recentes</h2>

          <a href="/">Ver tudo →</a>
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
