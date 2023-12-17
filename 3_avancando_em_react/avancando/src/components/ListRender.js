import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]); //array do tipo lista

    const [users] = useState([
        { id: 1, name: "Matheus", age: 31 },
        { id: 18164891, name: "João", age: 28 },
        { id: 51651561, name: "Pedro", age: 44 },
    ])

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
        </div>
    )
}

export default ListRender