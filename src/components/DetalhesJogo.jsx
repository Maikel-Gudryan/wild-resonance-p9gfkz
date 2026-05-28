import { useParams } from "react-router-dom";
import { useState } from "react";
import "../CSS/DetalhesJogo.css";

export default function DetalheJogo({ jogos }) {
  const { id } = useParams();
  const jogo = jogos.find(j => String(j.id) === id);

  const [midiaIndex, setMidiaIndex] = useState(0);

  if (!jogo) return <h2 style={{ color: "#fff" }}>Jogo não encontrado</h2>;

  // 🔥 MUITAS mini imagens agora
  const imagensExtras = jogo.imagens?.map(i => i.url) || [];

  const midias = [
    { type: "image", url: jogo.capaUrl },
    ...imagensExtras.map(url => ({ type: "image", url })),
    ...(jogo.videoUrl ? [{ type: "video", url: jogo.videoUrl }] : [])
  ];

  const midiaAtual = midias[midiaIndex];

  function next() {
    setMidiaIndex(prev => (prev + 1) % midias.length);
  }

  function prev() {
    setMidiaIndex(prev => (prev === 0 ? midias.length - 1 : prev - 1));
  }

  return (
    <div className="detalhe-page">

      {/* TOPO */}
      <div className="detalhe-top">

        {/* MEDIA */}
        <div className="detalhe-media">

          <div className="media-box">

            <button className="arrow left" onClick={prev}>❮</button>

            {midiaAtual?.type === "video" ? (
              <video controls src={midiaAtual.url} />
            ) : (
              <img src={midiaAtual?.url} alt={jogo.titulo} />
            )}

            <button className="arrow right" onClick={next}>❯</button>

          </div>

          {/* 🔥 MINI IMAGENS (AGORA MUITAS) */}
          <div className="mini-gallery">

            {midias.map((m, i) => (
              <img
                key={i}
                src={m.url}
                className={i === midiaIndex ? "active" : ""}
                onClick={() => setMidiaIndex(i)}
              />
            ))}

          </div>

        </div>

        {/* INFO */}
        <div className="detalhe-info">

          <h1>{jogo.titulo}</h1>

          <p className="desc">{jogo.descricao}</p>

          <div className="price">R$ {jogo.preco}</div>

          <div className="tags">
            {jogo.generos?.map(g => g.nome).join(" • ")}
          </div>

          {/* 🔥 BOTÃO AGORA QUADRADO */}
          <button className="buy">
            Comprar
          </button>

          <div className="extra-info">
            <p><strong>Status:</strong> Disponível</p>
            <p><strong>Categoria:</strong> Ação / RPG</p>
          </div>

        </div>

      </div>

      {/* SINOPSE */}
      <div className="section">
        <h2>Sinopse</h2>
        <p>{jogo.sinopse || jogo.descricao}</p>
      </div>

      {/* REQUISITOS */}
      <div className="section">
        <h2>Requisitos do Sistema</h2>
        <ul>
          <li>SO: Windows 10 / 11</li>
          <li>CPU: Intel i5+</li>
          <li>RAM: 8GB</li>
          <li>GPU: GTX 1050+</li>
          <li>20GB armazenamento</li>
        </ul>
      </div>

    </div>
  );
}