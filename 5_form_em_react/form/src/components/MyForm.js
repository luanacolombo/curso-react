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

    console.log(name)

    return (
        <div>
            {/*1 - criação de form*/}
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} />
                </div>
                {/*2 - label envolvendo input*/}
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" placeholder="Digite o seu e-mail" />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm