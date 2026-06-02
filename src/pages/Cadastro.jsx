import { useState } from "react"
import { useNavigate, link } from "react-router-dom";
import { api } from "../typescript/teste.ts";
import "../css/Login.css"

export default function Cadastro({}) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const entrarCadastro = () => {
        if(senha != '' && email != '' && nome != ''){
             navigate('/');
        }
        else{
            alert("Preencha todos os campos")
        }
    }

    return(
        <div className="sessao">
            <h2>Criar Conta</h2>
            <p>Crie sua conta</p>
            <div className="conta">
                <section className="conta">
                    <p>Nome</p>
                <input
                    type="name"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome..."
                />
                </section>
                <section className="conta">
                    <p>Email</p>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Digite seu email..."
                />
                </section>
                <section className="conta">
                    <p>Senha</p>
                <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Digite sua senha..."
                />
                </section>
                <section className="conta">
                    <p>Confirmar Senha</p>
                <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Digite sua senha novamente..."
                />
                </section>
            </div>
            <div className="botao">
                <button
                    onClick={entrarCadastro} 
                >
                    Criar Conta!
                </button>
            </div>
            <a href="/login">Fazer Login</a>


        </div>
    )

}
