import "../styles-header.css";

export default function App() {
  return (
    <div>
      <header className="header">
        <h1 className="logo">Prefeitura+</h1>

        <nav className="menu">
          <a href="/">Início</a>
          <a href="/">Denúncias</a>
          <a href="/">Diretório</a>

          <button>Sair</button>
        </nav>
      </header>
    </div>
  );
}
