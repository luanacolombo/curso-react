import { useState, useEffect } from "react";

//4 - custom hook
export const useFetch = (url) => { //função que exportamos, useFetch nome do arquivo, onde recebemos a url dele(da API) para puxar o dado
    const [data, setData] = useState(null) //vamos ter dados e setDados p/ trabalhar com os dados que recebemos da API

    //5 - refatorando post
    const [config, setConfig] = useState(null) //vai configurar o método que vai ser utilizado, como o POST e o cabeçalho
    const [method, setMethod] = useState(null) //diz qual método estaremos utilizando na função, se vai ser GET ou POST
    const [callFetch, setCallFetch] = useState(false) //serve para entrar

    //6 - loading
    const [loading, setLoading] = useState(false)

    //7 - tratando erros
    const [error, setError] = useState(null)

    const httpConfig = (data, method) => { //função que recebe os dados de envio e também o método da requisição
        if (method === "POST") { //se o método for POST
            setConfig({ //configuração da requisição
                method, //ganha o valor que está sendo passado da função
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data) //envia os dados
            })

            setMethod(method)
        }
    }

    useEffect(() => { //criação do request que vai envocar a requisição da API pra gente

        const fetchData = async () => {
            //6 - loading
            setLoading(true); //chama a função e começa a carregar os dados

            try {
                const res = await fetch(url); //request para a URL

                const json = await res.json(); //recebemos os dados como eles vem da API

                setData(json);

            } catch (error) {
                setError("Houve algum erro ao carregar os dados!")
            }

            setLoading(false); //após a exibição dos dados na tela, passamos para false, pois já temos os dados
        }

        fetchData(); //chama a função pra executar ela

    }, [url, callFetch]); //[url] é a dependencia dele, callFetch para mapear
    //sempre que alterar chamamo o fetch novamente para poder trazer os dados de novo

    //5 - refatorando post
    //vamos automaticamente executar uma requisição de GET quando o POST for concluido
    useEffect(() => { //sempre que houver uma alteração na config chama o useEffect, e ele vai fazer uma checagem
        const httpRequest = async () => {
            if (method === "POST") { //se o metodo for POST
                let fetchOptions = [url, config] //variável chamada fetchOptions, onde faremos um array com a url e as configurações

                const res = await fetch(...fetchOptions)

                const json = await res.json()

                setCallFetch(json)
            }
        }

        httpRequest()
    }, [config, method, url]) //configs sendo mapeadas

    return { data, httpConfig, loading, error } //dados que vamos usar na aplicação
}