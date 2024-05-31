import { useContext, useEffect, useState } from "react";
import { LocaisContext } from "../../context/LocaisContext";
import { useForm } from "react-hook-form";
import {  useNavigate, useParams } from "react-router-dom"
import "./styles.css"

function PaginaCadastro(){
    const {cadastrarLocal, atualizarLocal, locais} = useContext(LocaisContext)
    const {register, handleSubmit, setValue} = useForm()
    const {id} = useParams()
    const navigate = useNavigate()
    const [isEditing, setIsEditing] = useState(false)
    //const [currentLocal, setCurrentLocal] = useState(null)

    useEffect(()=>{
        if (id) {
            const local = locais.find((local) => local.id ===id);
            if (local) {
                //setCurrentLocal(local);
                setIsEditing(true);
                Object.keys(local).forEach((key) => {
                    setValue(key, local[key])
                })
            }
        }
    }, [id, locais, setValue])

    const onSubmit = (dados)=>{
        if (isEditing) {
            atualizarLocal({...dados, id})
        } else {
            cadastrarLocal(dados)
        }
        navigate("/locais")
    };

    return(
        <div className="container">
            <h1 className="container-titulo">Cadastrar novo local</h1>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-esquerda">
                    <label className="form-label">Destinatário</label>
                    <input type="text" className="form-input"
                    {...register("destinatario",{
                        required: "Campo obrigatório!"
                    })}/>

                    <label className="form-label">Tipo de local</label>
                    <select className="form-input" {...register("tipo",{
                        required: "Campo obrigatório!"
                    })}>
                        <option value="">Qual o tipo de local?</option>
                        <option value="Armazenamento">Armazenamento</option>
                        <option value="Fábrica">Fábrica</option>
                    </select>
                    

                    <label className="form-label">Planeta</label>
                    <input type="text" className="form-input"
                    {...register("planeta",{
                        required: "Campo obrigatório!"
                    })}/>

                    <label className="form-label">Lote (Marte)</label>
                    <input placeholder="Apenas para MARTE! Digite 1000 para Terra" type="number" className="form-input"
                    {...register("lote", {
                        maxLength: {value: 4, message:"Apenas 04 dígitos"}
                    })}/>
                </div>

                <div className="form-direita">
                    <label className="form-label">CEP (Terra)</label>
                    <input placeholder="Apenas para TERRA. Digite 0 para Marte" type="number" className="form-input"
                    {...register("cep")}/>

                    <label className="form-label">Endereço</label>
                    <input placeholder="Para Marte, digitar 'Não consta'" type="text" className="form-input"
                    {...register("rua")}/>

                    <label className="form-label">Número</label>
                    <input placeholder="Para Marte, digitar 0" type="number" className="form-input"
                    {...register("numero")}/>

                    <label className="form-label">Cidade</label>
                    <input placeholder="Para Marte, digitar 'Não consta'" type="text" className="form-input"
                    {...register("cidade")}/>

                    <label className="form-label">Estado</label>
                    <input placeholder="Para Marte, digitar 'Não consta'" type="text" className="form-input"
                    {...register("estado")}/>

                    <label className="form-label">País</label>
                    <input placeholder="Para Marte, digitar 'Não consta'" type="text" className="form-input"
                    {...register("pais")}/>
                </div>

                <div className="form-btn">
                    <button className="btn" type="submit">
                        {isEditing ? "Salvar Alterações" : "Cadastrar"}
                    </button>
                </div>

            </form>


        </div>
    )
}

export default PaginaCadastro;