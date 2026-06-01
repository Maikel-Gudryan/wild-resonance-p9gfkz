import { useState } from "react";
import "../css/Login.css"

export default function NovaDenuncia () {
    const [denunciaData, setDenuciaData] = useState('');
    
    return(
        <div className="conta">
            <navbar />
            <h2>Nova Solicitação</h2>
            <p>Preencha os detalhes abaixo para registrar uma nova denúncia ou solicitação de serviço</p>
            <section>
                <p>Categoria do Serviço</p>
                <select
                >
                    Selecione uma categoria
                </select>
            </section>

            <section>
                <p>Descrição Detalhada</p>
                <input
                    type="text"
                    value={denunciaData}
                    onChange={(e) => denunciaData(e.target.value)}
                    placeholder="Descreva o seu problema aqui com o maximo de detalhe..."
                />
            </section>
            
            <section>
                <p>Data de Ocorrencia</p>
                <input
                    type="date"
                />
            </section>
            <section>
                <p>Nivel de Urgencia</p>
                <select
                >
                </select>
            </section>
            <section>
                <p>Anexar Fotos/Documentos</p>
            </section>
            <div className="bt-controle">
                <section>
                    <button
                    >
                        Cancelar
                    </button>
                    <button
                    >
                        Registrar Denúncia
                    </button>
                </section>
            </div>
        </div>
    )
}