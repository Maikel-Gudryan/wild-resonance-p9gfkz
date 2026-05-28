import "../CSS/cardPrincipal.css";

export default function CardPrincipal() {
    return (
        <div className="featured-container">
        <button className="back-preview">❮</button>

        <div className="featured-card">
          {/* IMAGEM PRINCIPAL */}
          <div className="featured-left">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5aatyD9rymF-7GGoMi46XiWwpTv4v_7_l6TxA8smSWQimUCUxFm3Ri8UHo_nOHoUAPl6umhthFMdiISll6Ev76d9qYD5L8-7eLOJut3pH0C31OeCzd8dc8ISXuqvJ6dWeMZeb6E9y9LSc/s2048/ghost-of-tsushima-directors-cut.jpg"
              alt="game"
            />
          </div>

          {/* INFO */}
          <div className="featured-right">
            <h1>Ghost Of Tsushima</h1>

            <div className="mini-images">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDNqClVard24YfQYli-2PY9vTrs2tUXb1Dw&s"
                alt=""
              />
              <img
                src="https://images4.alphacoders.com/136/1363457.jpeg"
                alt=""
              />
              <img
                src="https://img.wallscloud.net/uploads/thumb/3820901699/938922-1024x576-MM-80.webp"
                alt=""
              />
              <img
                src="https://preview.redd.it/worth-to-uprage-my-1440p-monitor-to-4k-v0-x73d5bw6q5qa1.jpg?width=3840&format=pjpg&auto=webp&s=5852b0f1924b90156e4dfcbc4321a2ae17af1e62"
                alt=""
              />
            </div>

            <h2>Já disponível</h2>

            <span className="tag">Popular</span>
          </div>
        </div>

        <button className="next-preview">❯</button>
      </div>
    )
}