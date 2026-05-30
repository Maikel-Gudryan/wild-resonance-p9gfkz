import { useParams } from "react-router-dom";
import { useState } from "react";
import "../CSS/DetalhesJogo.css";

export default function DetalheJogo({ jogos }) {

  const { id } = useParams();

  const jogo = jogos.find(
    j => String(j.id) === id
  );

  const [midiaIndex, setMidiaIndex] = useState(0);

  if (!jogo) {
    return (
      <h2 style={{ color: "#fff", padding: "40px" }}>
        Jogo não encontrado
      </h2>
    );
  }

  const imagensExtras =
    jogo.imagens?.map(i => i.url) || [];

  const midias = [
    { type: "image", url: jogo.capaUrl },

    ...imagensExtras.map(url => ({
      type: "image",
      url
    })),

    ...(jogo.videoUrl
      ? [{ type: "video", url: jogo.videoUrl }]
      : [])
  ];

  const midiaAtual = midias[midiaIndex];

  function next(e) {
    e.stopPropagation();

    if (midias.length <= 1) return;

    setMidiaIndex(prev =>
      prev === midias.length - 1
        ? 0
        : prev + 1
    );
  }

  function prev(e) {
    e.stopPropagation();

    if (midias.length <= 1) return;

    setMidiaIndex(prev =>
      prev === 0
        ? midias.length - 1
        : prev - 1
    );
  }

  return (
    <div className="detalhe-page">

      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${jogo.capaUrl})`
        }}
      >

        <div className="hero-overlay">

          <div className="detalhe-container">

            <h1 className="game-title">
              {jogo.titulo}
            </h1>

            <div className="detalhe-top">

              {/* ESQUERDA */}
              <div className="detalhe-media">

                <div className="media-box">

                  <button
                    type="button"
                    className="arrow left"
                    onClick={prev}
                  >
                    ❮
                  </button>

                  {
                    midiaAtual?.type === "video"
                      ? (
                        <video
                          key={midiaAtual.url}
                          controls
                          autoPlay
                          muted
                          src={midiaAtual.url}
                        />
                      )
                      : (
                        <img
                          key={midiaAtual.url}
                          src={midiaAtual.url}
                          alt={jogo.titulo}
                        />
                      )
                  }

                  <button
                    type="button"
                    className="arrow right"
                    onClick={next}
                  >
                    ❯
                  </button>

                </div>

                <div className="mini-gallery">

                  {midias.map((m, i) => (

                    <div
                      key={i}
                      className={
                        i === midiaIndex
                          ? "mini-thumb active"
                          : "mini-thumb"
                      }
                      onClick={() =>
                        setMidiaIndex(i)
                      }
                    >

                      {
                        m.type === "video"
                          ? (
                            <video
                              src={m.url}
                              muted
                            />
                          )
                          : (
                            <img
                              src={m.url}
                              alt=""
                            />
                          )
                      }

                    </div>

                  ))}

                </div>

                {/* SOBRE O JOGO */}
                <div className="section game-about">

                  <h2>Sobre este jogo</h2>

                  <p>
                    {jogo.sinopse || jogo.descricao}
                  </p>

                  <p>
                    Explore um mundo imersivo cheio
                    de desafios, exploração,
                    progressão e combate intenso.
                  </p>

                </div>

                {/* IDIOMAS */}
                <div className="section">

                  <h2>Idiomas Suportados</h2>

                  <div className="language-grid">

                    <div>🇧🇷 Português</div>
                    <div>🇺🇸 Inglês</div>
                    <div>🇪🇸 Espanhol</div>
                    <div>🇫🇷 Francês</div>
                    <div>🇩🇪 Alemão</div>
                    <div>🇯🇵 Japonês</div>

                  </div>

                </div>

                {/* REQUISITOS */}
                <div className="section">

                  <h2>Requisitos do Sistema</h2>

                  <div className="req-grid">

                    <div>

                      <h3>Mínimos</h3>

                      <ul>
                        <li>SO: Windows 10</li>
                        <li>CPU: Intel i5</li>
                        <li>RAM: 8 GB</li>
                        <li>GPU: GTX 1050</li>
                        <li>Armazenamento: 20 GB</li>
                      </ul>

                    </div>

                    <div>

                      <h3>Recomendados</h3>

                      <ul>
                        <li>SO: Windows 11</li>
                        <li>CPU: Intel i7</li>
                        <li>RAM: 16 GB</li>
                        <li>GPU: RTX 3060</li>
                        <li>SSD recomendado</li>
                      </ul>

                    </div>

                  </div>

                </div>

              </div>
                            {/* DIREITA */}
              <div className="detalhe-info">

                <img
                  className="game-cover"
                  src={jogo.capaUrl}
                  alt={jogo.titulo}
                />

                <p className="desc">
                  {jogo.descricao}
                </p>

                <div className="price-card">

                  <div className="discount-row">

                    <span className="discount">
                      -25%
                    </span>

                    <div>

                      <small className="old-price">
                        R$ {(jogo.preco * 1.25).toFixed(2)}
                      </small>

                      <h2 className="new-price">
                        R$ {jogo.preco}
                      </h2>

                    </div>

                  </div>

                  <button className="buy">
                    🛒 Comprar
                  </button>

                </div>

                <div className="info-card">

                  <h3>Informações</h3>

                  <div className="info-item">
                    <span>Gênero</span>
                    <strong>
                      {jogo.generos?.[0]?.nome || "Ação"}
                    </strong>
                  </div>

                  <div className="info-item">
                    <span>Desenvolvedor</span>
                    <strong>VAPOReon Studio</strong>
                  </div>

                  <div className="info-item">
                    <span>Lançamento</span>
                    <strong>2026</strong>
                  </div>

                  <div className="info-item">
                    <span>Modo</span>
                    <strong>Online</strong>
                  </div>

                </div>

                <div className="info-card">

                  <h3>Categoria/Gênero</h3>

                  <div className="tags">

                    {jogo.generos?.map((g, i) => (

                      <span key={i}>
                        {g.nome}
                      </span>

                    ))}

                    <span>Aventura</span>
                    <span>Popular</span>

                  </div>

                </div>

                <div className="info-card">

                  <h3>Recursos</h3>

                  <div className="feature">
                    🎮 Multiplayer
                  </div>

                  <div className="feature">
                    ⚔️ PvP Online
                  </div>

                  <div className="feature">
                    🌎 Mundo Aberto
                  </div>

                  <div className="feature">
                    🏆 Conquistas
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}