const Container = ({ children, myValue }) => {
    {/*chama a propriedade children e a myValue*/ }
    return (
        <div>
            <h2>Este é o título do container</h2>
            {children} {/*faz a impressão do container que foi feito no App.js*/}
            <p>O valor é: {myValue}</p>
        </div>
    )
}

export default Container