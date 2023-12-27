import './MyForm.css';

import { useState } from 'react';

const MyForm = ({ user }) => {
    //6 - controlled inputs
    //3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "") //se o usuário existe, imprime o nome, se não, vazio
    const [email, setEmail] = useState(user ? user.email : "") //se o email existe, imprime o email, se não, vazio

    const [bio, setBio] = useState(user ? user.bio : "")

    const [role, setRole] = useState(user ? user.role : "")

    //maneira para resgatar o valor do input
    const handleName = (e) => { //função p/ lidar com o nome, que recebe o evento (e)
        setName(e.target.value) //muda o estado cada vez que é digitado algo no input
    }

    console.log(name) //mostra no console as alterações
    console.log(email) //mostra no console as alterações

    const handleSubmit = (event) => {
        event.preventDefault() //formulário não irá mais recarregar a página, faz o envio tradicional do formulário
        console.log("Enviando o formulário")
        console.log(name, email, bio, role)

        //7 - limpar form
        setName("") //atualiza para um valor vazio
        setEmail("") //atualiza para um valor vazio
        setBio("") //atualiza para um valor vazio
    }

    return (
        <div>
            {/*5 - envio de form*/}

            {/*1 - criação de form*/}
            <form onSubmit={handleSubmit}> {/*atributo onSubmit pega o evento de submissão do formulário, handleSubmit função que processa o envio*/}
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name} />
                </div>
                {/*2 - label envolvendo input*/}
                <label>
                    <span>E-mail:</span>
                    {/*4 - simplificação de manipulação de state*/}
                    <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>
                {/*8 - textarea*/}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
                {/*9 - select*/}
                <label>
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm