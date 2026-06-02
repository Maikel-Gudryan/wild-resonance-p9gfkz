import { useState, useEffect } from "react";
import { useNavigate, link } from "react-router-dom";
import "../css/Login.css"

export default function Denuncias() {
    const [pesquisarDenuncia, setPesquisarDenuncia] = useState('');
    const [denunciaSelecionar, setDenunciaSelecionar] = useState('');
    
    return(
        <div className="conta">
            <h2>Minhas Denuncias</h2>
            <p>Acompanhe os status e detalhes das suas solicitações ativas e concluídas.</p>
            <div >
                <input
                    type="text"
                    value={pesquisarDenuncia}
                    onChange={(e) => setPesquisarDenuncia(e.target.value)}
                    placeholder="Bucar por protocolo, titulo ou endereço..."
                />
                <select link="http"

                >
                    filtrar
                </select>
            </div>

            <div>
                <button
                >
                    Carregar mais
                </button>
            </div>
        </div>
    )
    

}