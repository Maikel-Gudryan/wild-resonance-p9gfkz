import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../CSS/PopupPromocao.css";

export default function PopupPromocao({ jogos }) {

  const [aberto, setAberto] = useState(false);

  const [slide, setSlide] = useState(0);

  const navigate = useNavigate();


  useEffect(() => {

    if (!jogos.length) return;

    const timer = setTimeout(() => {

      setAberto(true);

    }, 1200);

    return () => clearTimeout(timer);

  }, [jogos.length]);


  useEffect(() => {

    if (!aberto) return;

    const autoSlide = setInterval(() => {

      setSlide(prev => {

        if (prev >= jogos.length - 1) {
          return 0;
        }

        return prev + 1;

      });

    }, 5000);

    return () => clearInterval(autoSlide);

  }, [aberto, jogos.length]);


  if (!aberto || jogos.length === 0) {
    return null;
  }

  const jogo = jogos[slide];

 
  function fechar() {

    setAberto(false);

  }


  function next() {

    setSlide(prev => {

      if (prev >= jogos.length - 1) {
        return 0;
      }

      return prev + 1;

    });

  }

  function prev() {

    setSlide(prev => {

      if (prev <= 0) {
        return jogos.length - 1;
      }

      return prev - 1;

    });

  }

  function abrirDetalhes() {

    navigate(`/jogo/${jogo.id}`);

    setAberto(false);

  }

  return (

    <div className="popup-overlay">

      <div className="popup-container">

        {/* FECHAR */}
        <button
          className="popup-close"
          onClick={fechar}
        >
          ✕
        </button>

        {/* CONTEÚDO */}
        <div className="popup-content">

          {/* SETA ESQUERDA */}
          <button
            className="popup-arrow left"
            onClick={prev}
          >
            ❮
          </button>

          {/* CARD */}
          <div className="popup-card">

            {/* HEADER */}
            <div className="popup-header">

              🔥 OFERTA ESPECIAL 🔥

            </div>

            {/* IMAGEM */}
            <img
              src={
                jogo.capaUrl ||
                "https://placehold.co/900x500"
              }
              alt={jogo.titulo}
            />

            {/* INFO */}
            <div className="popup-info">

              <h2>
                {jogo.titulo}
              </h2>

              <p>
                {
                  jogo.descricao?.slice(0, 140)
                }...
              </p>

              {/* TAGS */}
              <div className="popup-tags">

                <span>
                  {
                    jogo.generos?.[0]?.nome ||
                    "Ação"
                  }
                </span>

                <span>Popular</span>

                <span>Online</span>

              </div>

              {/* PREÇO */}
              <div className="popup-price">

                <span>
                  -75%
                </span>

                <div>

                  <small>
                    R$ 199,90
                  </small>

                  <strong>
                    R$ {jogo.preco}
                  </strong>

                </div>

              </div>

            </div>

            {/* BOTÃO */}
            <button
              className="popup-details"
              onClick={abrirDetalhes}
            >
              VER DETALHES
            </button>

          </div>

          {/* SETA DIREITA */}
          <button
            className="popup-arrow right"
            onClick={next}
          >
            ❯
          </button>

        </div>

        {/* BOLINHAS */}
        <div className="popup-dots">

          {jogos.slice(0, 5).map((_, i) => (

            <span
              key={i}
              onClick={() => setSlide(i)}
              className={
                i === slide
                  ? "active"
                  : ""
              }
            />

          ))}

        </div>

      </div>

    </div>

  );

}