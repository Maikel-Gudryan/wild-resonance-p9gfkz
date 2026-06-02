import { useNavigate, link } from "react-router-dom";
import "../css/Login.css"

export default function Usuarios() {

    return (
        <div className="conta">
            <h2>Meu Perfil</h2>
            <p>Gerencie suas informações pessoais, segurança e configurações da conta.</p>
            <section className="sessao">
                <h3>Ações Rapidas</h3>
                <div className="conta">
                    <section>
                        <h4>Meus Protocolos</h4>
                        <p>Acompanhe seus pedidos</p>
                    </section>

                    <section>
                        <h4>Certidões</h4>
                        <p>Emitir e validar</p>
                    </section>

                    <section>
                        <h4>Agendamento</h4>
                        <p>Consultas e serviços</p>
                    </section>
                </div>
                <div className="conta">
                    <h4>Segurança da Conta</h4>
                    <p>Mantenha seus dados protegidos revisando suas credenciais de acesso regularmente.</p>

                    <h4>Senha de acesso</h4>
                    <p>Última alteração</p>

                    <h4>Autenticação em Duas Etapas (2FA)</h4>
                    <p>Adicione uma camada extra de proteção via SMS ou App.</p>
                </div>
            </section>
        </div>
    )

}