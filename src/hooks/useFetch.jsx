import { useEffect } from "react";
import { useState } from "react";


function useFetch(url){
    const [dados, setDados] = useState()

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((dados) => setDados(dados))
        .catch((error) => console.log(error))
    }, [url])

    return dados;
}

export default useFetch;