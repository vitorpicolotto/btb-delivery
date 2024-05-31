import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";


export const LocaisContext = createContext()

export const LocaisContextProvider = ({children}) => {
    const [locais, setLocais] = useState([])
    const dados = useFetch("/dados.json")

    useEffect(()=>{
        if (!!dados){
            setLocais(dados.locais)
        }
    }, [dados]);

    const cadastrarLocal = (novoLocal) =>{
        const updatedLocal = [...locais, {...novoLocal, id: Date.now().toString()}];
        setLocais(updatedLocal);

        fetch("/dados.json", {
            method: "POST",
            body: JSON.stringify(updatedLocal),
            headers: { 'Content-Type': 'application/json'
        },
    })
    .then(()=> alert("Local cadastrado!"))
    .catch(()=> alert("Erro ao cadastrar local!"), error)
    }

    const atualizarLocal = (localAtualizado) => {
        const updatedLocal = locais.map((local) =>
        local.id === localAtualizado.id ? localAtualizado : local
        );
        setLocais(updatedLocal);

        fetch("/dados.json", {
            method: "POST",
            body: JSON.stringify(updatedLocal),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(()=> alert("Local atualizado!"))
        .catch((error) => alert("Erro ao atualizar"))
    }

    return (
        <LocaisContext.Provider value={{locais, cadastrarLocal, atualizarLocal}}>
            {children}
        </LocaisContext.Provider>
    )
}