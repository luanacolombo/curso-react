const ExecuteFunction = ({ myFunction }) => {
    return (
        <div>
            <button onClick={myFunction}>Clique aqui para executar a função</button>
        </div>
    )
}

{/*e aqui no componente extraimos ela da prop e colocamos onde precisa executar*/ }

export default ExecuteFunction