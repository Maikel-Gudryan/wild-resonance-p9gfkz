import { useState } from "react"
import Cadastro from "./Cadastro";
import { useNavigate, link } from "react-router-dom";
import "../css/Login.css"

export default function Login(email, senha) {

    const ConectarEmail = (event) =>{
        e => setEmail(e.target.value)
    }
    const ConectarSenha = (event) =>{
        e => setSenha(e.target.value)
    }
    const entrarLogin = () => {
        entrar = email && senha 
    }

    return(
        <div className = "sessao">
            <h2>Iniciar Sessão</h2>
            <p>Faça Login para continuar</p>
            <div className = "conta">
                <p>Email</p>
                <input 
                    type="email"
                    value={email}
                    onChange={ConectarEmail}
                    placeholder="Digite seu email..."
                >
                </input>
            </div>
            <div className = "conta">
                <p>Senha</p>
                <input
                    type="password"
                    value={senha}
                    onChange={ConectarSenha}
                    placeholder="Digite sua senha..."
                >
                </input>
            </div>
            <div className="botao">
                <button
                    onClick={entrarLogin}
                >
                    Iniciar Sessão!
                </button>
            </div>
            <a href="/Cadastro">Cadastrar Aqui</a>
        </div>
    )
}