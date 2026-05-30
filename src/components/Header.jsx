import "../CSS/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo-box"
          src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/134.png"
          alt=""
        />

        <h1 className="logo-text">
          <span className="vapor">VAPOR</span>
          <span className="eon">eon</span>
        </h1>
      </div>

      <nav className="nav">
        <a href="/">Store</a>
        <a href="/">Library</a>
        <a href="/">Community</a>
        <a href="/">Support</a>
      </nav>

      <div className="search-box">
        <input type="text" placeholder="Search games..." />
      </div>

      <div className="profile">
        <img src="https://i.pravatar.cc/40" alt="profile" />

        <div>
          <h4>Ricardo S Almeida</h4>
          <span>Level 98</span>
        </div>
      </div>
    </header>
  );
}