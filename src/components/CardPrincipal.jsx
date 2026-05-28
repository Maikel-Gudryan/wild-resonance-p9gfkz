import "../CSS/cardPrincipal.css";

export default function CardPrincipal({
    jogo,
    proximoJogo,
    voltarJogo
}) {

    return (
        <div className="featured-container">

            <button
                className="back-preview"
                onClick={voltarJogo}
            >
                ❮
            </button>

            <div className="featured-card">

                {/* IMAGEM PRINCIPAL */}
                <div className="featured-left">

                    <img
                        src={
                            jogo.capaUrl ||
                            "https://placehold.co/600x400?text=Sem+Capa"
                        }
                        alt={jogo.titulo}
                    />

                </div>

                {/* INFO */}
                <div className="featured-right">

                    <h1>{jogo.titulo}</h1>

                    <p>{jogo.descricao}</p>

                    <h2>{jogo.desenvolvedora}</h2>

                    <span className="tag">

                        {jogo.generos.length > 0
                            ? jogo.generos[0].nome
                            : "Sem gênero"}

                    </span>

                    <h3>
                        R$ {jogo.preco}
                    </h3>

                </div>

            </div>

            <button
                className="next-preview"
                onClick={proximoJogo}
            >
                ❯
            </button>

        </div>
    );
}