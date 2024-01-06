import { useState, useEffect } from "react";

//4- custom hook
export const useFetch = (url) => { //função que exportamos, useFetch nome do arquivo, onde recebemos a url dele(da API) para puxar o dado
    const [data, setData] = useState(null) //vamos ter dados e setDados p/ trabalhar com os dados que recebemos da API

    useEffect(() => { //criação do request que vai envocar a requisição da API pra gente

        const fetchData = async () => {
            const res = await fetch(url) //request para a URL

            const json = await res.json() //recebemos os dados como eles vem da API

            setData(json)
        }

        fetchData() //chama a função pra executar ela

    }, [url]) //[url] é a dependencia dele

    return { data } //dados que vamos usar na aplicação
}