const ChangeMessageState = ({ handleMessage }) => {
    const messages = ["Oi", "Olá", "Oi, tudo bem?"]

    return (
        <div>
            <button onClick={() => handleMessage(messages[0])}>1</button> {/*quando rolar o click, vai ativar a função handlMessage e passa o valor de messages do indice 0*/}
            <button onClick={() => handleMessage(messages[1])}>2</button> {/*quando rolar o click, vai ativar a função handlMessage e passa o valor de messages do indice 0*/}
            <button onClick={() => handleMessage(messages[2])}>3</button> {/*quando rolar o click, vai ativar a função handlMessage e passa o valor de messages do indice 0*/}
        </div>
    )
}

export default ChangeMessageState