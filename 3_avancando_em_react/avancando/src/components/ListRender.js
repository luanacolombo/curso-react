import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]); //array do tipo lista

    return (
        <div>
            <ul>
                {list.map((item) => ( //método map inserido nesse dado utilizando a sintaxe dinamica de imprimir código JS
                    <li>{item}</li> //retorno de algo, por cauda da arrowfunction, que é um obj JSX imprimindo o que precisamos em casa uma das interações
                ))}
            </ul>
        </div>
    )
}

export default ListRender