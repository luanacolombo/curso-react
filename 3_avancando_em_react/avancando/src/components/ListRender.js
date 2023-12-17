import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]); //array do tipo lista

    const [users, setUsers] = useState([ //array de users
        { id: 1, name: "Matheus", age: 31 },
        { id: 2, name: "João", age: 28 },
        { id: 3, name: "Pedro", age: 44 },
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4) //Math.floor arredonda pra baixo, *4 pois é o n. de itens da lista

        setUsers((prevUsers) => { //deletar, executa uma função, prevUsers resultado anterior dos usuários
            console.log(prevUsers) //mostra no console
            return prevUsers.filter((user) => randomNumber !== user.id) //manipulação p/ alterar o state dos usuários, filtra algum usuário que tenha o id diferente dos id passados antes
        }) //os que derem match ele vai excluir, os que tiverem id diferente ele vai manter na lista
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => ( //método map inserido nesse dado utilizando a sintaxe dinamica de imprimir código JS
                    <li key={i}>{item}</li> //retorno de algo, por cauda da arrowfunction, que é um obj JSX imprimindo o que precisamos em casa uma das interações
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li kay={user.id}>
                        {user.name} - {user.age}
                    </li> //{user.name} - {user.age} imprime os dados na tela
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender