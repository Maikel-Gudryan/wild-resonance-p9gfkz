import "../styles-header.css";

export default function App() {
  return (
    <div>
      <header className="header">
        <h1 className="logo">Prefeitura+</h1>

        <nav className="menu">
          <a href="/">Início</a>
          <a href="/denuncias">Denúncias</a>
          <a href="/departamentos">Diretório</a>

          <a href="/Login">Sair</a>
        </nav>
      </header>
    </div>
  );
}
