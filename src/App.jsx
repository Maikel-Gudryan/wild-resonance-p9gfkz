import { useEffect, useState } from "react";

import CardPrincipal from "./components/CardPrincipal";
import Header from "./components/Header";
import CardsPromocoes from "./components/CardsPromocoes";

import API from "./services/api";

function App() {

  const [jogos, setJogos] = useState([]);
  const [indexAtual, setIndexAtual] = useState(0);

  useEffect(() => {

    fetch(`${API}/jogos`)
      .then(res => res.json())
      .then(data => {

        setJogos(data.itens);

      });

  }, []);

  function proximoJogo() {

    if (indexAtual < jogos.length - 1) {
      setIndexAtual(indexAtual + 1);
    }

  }

  function voltarJogo() {

    if (indexAtual > 0) {
      setIndexAtual(indexAtual - 1);
    }

  }

  return (
    <div>

      <Header />

      {jogos.length > 0 && (

        <CardPrincipal
          jogo={jogos[indexAtual]}
          proximoJogo={proximoJogo}
          voltarJogo={voltarJogo}
        />

      )}

      <CardsPromocoes />

    </div>
  );
}

export default App;