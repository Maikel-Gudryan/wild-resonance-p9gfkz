import { useState } from "react";
import { useNavigate, link } from "react-router-dom";
import "../css/Login.css"

export default function Departamentos() {

    const [departamento, setDepartamento] = useState('');

    return(
    <div className="sessao">
        <h2>departamentos</h2>
        <p>me ensine a conectar meu frontend para quando criar uma coisa nele tambem criar na api conectada</p>
    </div>
    )

}