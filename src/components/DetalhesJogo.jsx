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

  // =========================
  // SETAS FUNCIONAIS
  // =========================
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

      {/* HERO */}
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${jogo.capaUrl})`
        }}
      >

        <div className="hero-overlay">

          <div className="detalhe-container">

            {/* TÍTULO */}
            <h1 className="game-title">
              {jogo.titulo}
            </h1>

            {/* TOP */}
            <div className="detalhe-top">

              {/* ESQUERDA */}
              <div className="detalhe-media">

                {/* MEDIA PRINCIPAL */}
                <div className="media-box">

                  {/* SETA ESQUERDA */}
                  <button
                    type="button"
                    className="arrow left"
                    onClick={prev}
                  >
                    ❮
                  </button>

                  {/* MIDIA */}
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
                          src={midiaAtual?.url}
                          alt={jogo.titulo}
                        />
                      )
                  }

                  {/* SETA DIREITA */}
                  <button
                    type="button"
                    className="arrow right"
                    onClick={next}
                  >
                    ❯
                  </button>

                </div>

                {/* MINI GALERIA */}
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

                <div className="review-box">

                  <div>
                    <span>Avaliações:</span>
                    <strong>Muito positivas</strong>
                  </div>

                  <div>
                    <span>Categoria:</span>
                    <strong>
                      {jogo.generos?.[0]?.nome || "Ação"}
                    </strong>
                  </div>

                  <div>
                    <span>Status:</span>
                    <strong>Disponível</strong>
                  </div>

                </div>

                {/* TAGS */}
                <div className="tags">

                  {jogo.generos?.map((g, i) => (

                    <span key={i}>
                      {g.nome}
                    </span>

                  ))}

                  <span>Multiplayer</span>
                  <span>Popular</span>
                  <span>Online</span>

                </div>

                {/* PREÇO */}
                <div className="buy-box">

                  <div className="price-area">

                    <small>Preço</small>

                    <h2>
                      R$ {jogo.preco}
                    </h2>

                  </div>

                  <button className="buy">
                    Comprar
                  </button>

                </div>

              </div>

            </div>

            {/* SOBRE */}
            <div className="bottom-layout">

              {/* ESQUERDA */}
              <div className="bottom-left">

                {/* SOBRE */}
                <div className="section">

                  <h2>Sobre este jogo</h2>

                  <p>
                    {jogo.sinopse || jogo.descricao}
                  </p>

                  <p>
                    Explore um mundo imersivo cheio
                    de desafios, combates intensos,
                    exploração e progressão épica.
                  </p>

                  <p>
                    Descubra novos inimigos,
                    habilidades especiais e
                    ambientes incríveis inspirados
                    nos maiores jogos AAA.
                  </p>

                </div>

                {/* REQUISITOS */}
                <div className="section">

                  <h2>
                    Requisitos do Sistema
                  </h2>

                  <div className="req-grid">

                    <div>

                      <h3>Mínimos</h3>

                      <ul>

                        <li>
                          SO: Windows 10
                        </li>

                        <li>
                          CPU: Intel i5
                        </li>

                        <li>
                          RAM: 8 GB
                        </li>

                        <li>
                          GPU: GTX 1050
                        </li>

                        <li>
                          Armazenamento: 20 GB
                        </li>

                      </ul>

                    </div>

                    <div>

                      <h3>Recomendados</h3>

                      <ul>

                        <li>
                          SO: Windows 11
                        </li>

                        <li>
                          CPU: Intel i7
                        </li>

                        <li>
                          RAM: 16 GB
                        </li>

                        <li>
                          GPU: RTX 3060
                        </li>

                        <li>
                          SSD recomendado
                        </li>

                      </ul>

                    </div>

                  </div>

                </div>

              </div>

              {/* DIREITA */}
              <div className="bottom-right">

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