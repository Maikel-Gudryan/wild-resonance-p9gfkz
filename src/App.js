import "./styles.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

export default function App() {
  return (
    <div>
      <Header />
      <Cadastro/>
    </div>
  );
}
''