import { useState } from "react";

const ManageData = () => {
    let someData = 10; //variável

    console.log(someData);

    const [number, setNumber] = useState(15); //declara duas variáveis, desestruturar como se fosse um array, number é o nome que a gente quer e depois set+nomeQueAGenteEscolheu

    return (
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => { someData = 15 }}>Mudar variável</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(25)}>Mudar o state</button>
            </div>
        </div>
    )
}

export default ManageData