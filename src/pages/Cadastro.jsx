import { useState } from "react"
import "../css/Login.css"

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const entrarCadastro = () =>{
        entrar = nome && email && senha
    }
    const AdcionarEmail = (event) =>{
        e => setEmail(e.target.value)
    }
    const AdicionarSenha = (event) =>{
        e => setSenha(e.target.value)
    }
    const AdicionarNome = (event) =>{
        e => setNome(e.target.value)
    }
    return(
        <div className="sessao">
            <h2>Criar Conta</h2>
            <p>Crie sua conta</p>
            <div className="conta">
                <input
                    type="name"
                    value={nome}
                    onChange={AdicionarNome}
                    placeholder="Digite seu nome..."
                />
                <input 
                    type="email" 
                    value={email}
                    onChange={AdcionarEmail}
                    placeholder="Digite seu email..."
                />
                <input
                    type="password"
                    value={senha}
                    onChange={AdicionarSenha}
                    placeholder="Digite sua senha..."
                />
                <input
                    type="password"
                    value={senha}
                    onChange={AdicionarSenha}
                    placeholder="Digite sua senha novamente..."
                />
            </div>
            <div className="botao">
                <button
                    onClick={entrarCadastro}
                >
                    Criar Conta!
                </button>
            </div>



        </div>
    )

}
