import './MyForm.css';

import { useState } from 'react';

const MyForm = () => {
    //3 - gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    //maneira para resgatar o valor do input
    const handleName = (e) => { //função p/ lidar com o nome, que recebe o evento (e)
        setName(e.target.value) //muda o estado cada vez que é digitado algo no input
    }

    console.log(name) //mostra no console as alterações
    console.log(email) //mostra no console as alterações

    const handleSubmit = (event) => {
        event.preventDefault() //formulário não irá mais recarregar a página, faz o envio tradicional do formulário
        console.log("Enviando o formulário")
        console.log(name, email)
    }

    return (
        <div>
            {/*5 - envio de form*/}

            {/*1 - criação de form*/}
            <form onSubmit={handleSubmit}> {/*atributo onSubmit pega o evento de submissão do formulário, handleSubmit função que processa o envio*/}
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} />
                </div>
                {/*2 - label envolvendo input*/}
                <label>
                    <span>E-mail:</span>
                    {/*4 - simplificação de manipulação de state*/}
                    <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm