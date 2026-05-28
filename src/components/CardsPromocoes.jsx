import { useEffect, useState } from "react";

import "../CSS/cardsPromocoes.css";

import API from "../services/api";

export default function CardsPromocoes() {

  const [jogos, setJogos] = useState([]);
  const [indexAtual, setIndexAtual] = useState(0);

  useEffect(() => {

    fetch(`${API}/jogos`)
      .then((res) => res.json())
      .then((data) => {

        setJogos(data.itens);

      });

  }, []);

  function proximoSlide() {

    if (indexAtual < jogos.length - 4) {
      setIndexAtual(indexAtual + 1);
    }

  }

  function slideAnterior() {

    if (indexAtual > 0) {
      setIndexAtual(indexAtual - 1);
    }

  }

  return (

    <div className="discount-section">

      {/* HEADER */}
      <div className="discount-header">

        <h2>Descontos e eventos</h2>

        <button>VER MAIS</button>

      </div>

      {/* CONTEÚDO */}
      <div className="discount-content">

        {/* BOTÃO ESQUERDA */}
        <button
          className="previous-slide"
          onClick={slideAnterior}
        >
          ❮
        </button>

        {/* CARDS */}
        <div className="discount-cards">

          {/* CARD 1 */}
          <div className="game-card">

            <img
              src={
                jogos[indexAtual]?.capaUrl ||
                "https://placehold.co/600x400"
              }
              alt=""
            />

            <div className="hover-details">

              <h3>
                {jogos[indexAtual]?.titulo}
              </h3>

              <p className="release-date">
                Lançado recentemente
              </p>

              <div className="hover-images">

                <img
                  src={
                    jogos[indexAtual]?.capaUrl ||
                    "https://placehold.co/600x400"
                  }
                  alt=""
                />

                <img
                  src={
                    jogos[indexAtual]?.capaUrl ||
                    "https://placehold.co/600x400"
                  }
                  alt=""
                />

              </div>

              <p className="review-text">
                Muito positivas
              </p>

              <div className="hover-tags">

                <span>
                  {jogos[indexAtual]?.generos?.[0]?.nome || "Ação"}
                </span>

                <span>Online</span>

                <span>Popular</span>

              </div>

            </div>

            <div className="game-info">

              <h3>
                {jogos[indexAtual]?.titulo}
              </h3>

              <p>
                {jogos[indexAtual]?.descricao}
              </p>

              <div className="price-box">

                <span className="discount">
                  -55%
                </span>

                <div className="prices">

                  <small>
                    R$ 39,99
                  </small>

                  <strong>
                    R$ {jogos[indexAtual]?.preco}
                  </strong>

                </div>

              </div>

            </div>

          </div>

          ```jsx
          {/* CARD 2 */}
          <div className="game-card">

            <img
              src={
                jogos[indexAtual + 1]?.capaUrl ||
                "https://placehold.co/600x400"
              }
              alt=""
            />

            <div className="game-info">

              <h3>
                {jogos[indexAtual + 1]?.titulo}
              </h3>

              <p>
                {jogos[indexAtual + 1]?.descricao}
              </p>

              <div className="price-box">

                <span className="discount">
                  -85%
                </span>

                <div className="prices">

                  <small>
                    R$ 47,49
                  </small>

                  <strong>
                    R$ {jogos[indexAtual + 1]?.preco}
                  </strong>

                </div>

              </div>

            </div>

            <div className="hover-details">

              <h3>
                {jogos[indexAtual + 1]?.titulo}
              </h3>

              <p className="release-date">
                Lançado recentemente
              </p>

              <div className="hover-images">

                <img
                  src={
                    jogos[indexAtual + 1]?.capaUrl ||
                    "https://placehold.co/300x200"
                  }
                  alt=""
                />

                <img
                  src={
                    jogos[indexAtual + 1]?.capaUrl ||
                    "https://placehold.co/300x200"
                  }
                  alt=""
                />

              </div>

              <p className="review-text">
                Muito positivas
              </p>

              <div className="hover-tags">

                <span>
                  {jogos[indexAtual + 1]?.generos?.[0]?.nome || "Ação"}
                </span>

                <span>Open World</span>

                <span>Multiplayer</span>

              </div>

            </div>

          </div>
          ```


          {/* COLUNA DIREITA */}
          <div className="side-column">

            {/* MINI CARD 1 */}
            <div className="mini-card">

              <img
                src={
                  jogos[indexAtual + 2]?.capaUrl ||
                  "https://placehold.co/600x400"
                }
                alt=""
              />

              <div className="mini-info">

                <span>
                  {jogos[indexAtual + 2]?.titulo}
                </span>

                <div className="mini-price">

                  <strong>-85%</strong>

                  <p>
                    R$ {jogos[indexAtual + 2]?.preco}
                  </p>

                </div>

              </div>

            </div>

            {/* MINI CARD 2 */}
            <div className="mini-card">

              <img
                src={
                  jogos[indexAtual + 3]?.capaUrl ||
                  "https://placehold.co/600x400"
                }
                alt=""
              />

              <div className="mini-info">

                <span>
                  {jogos[indexAtual + 3]?.titulo}
                </span>

                <div className="mini-price">

                  <strong>-40%</strong>

                  <p>
                    R$ {jogos[indexAtual + 3]?.preco}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BOTÃO DIREITA */}
        <button
          className="next-slide"
          onClick={proximoSlide}
        >
          ❯
        </button>

      </div>

      {/* BOLINHAS */}
      <div className="slider-dots">

        <span className="active-dot"></span>
        <span></span>
        <span></span>
        <span></span>

      </div>

    </div>

  );
}