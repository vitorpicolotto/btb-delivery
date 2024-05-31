import {  useEffect, useState, useContext } from "react";
import CardLocais from "../../components/CardLocais";
import { LocaisContext } from "../../context/LocaisContext";
import { useNavigate} from "react-router-dom"
import "./styles.css"


function PaginaLocais(){
    const [dadosLocais, setDadosLocais] = useState([])
    const {locais} = useContext(LocaisContext)
    const navigate = useNavigate()

    useEffect(()=>{
        setDadosLocais(locais)
    },[locais])

    const handleEditClick = (local) => {
       navigate(`/editar/${local.id}`)
    }

    return(
        <div className="locais">
            <h1 className="locais-titulo">Serviços Cadastrados</h1>
            <div className="locais-card">
                {!!dadosLocais && dadosLocais.map((dados, index) => (
                    <CardLocais key={index} dadosLocais={dados} onEdit={() => handleEditClick(dados)}/>
                ))}
                <button className="card-btn" onClick={() => navigate("/cadastro")}>Adicionar Serviço</button>
            </div>
        </div>
    )
}

export default PaginaLocais;