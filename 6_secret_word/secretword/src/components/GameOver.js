import "./GameOver.css";
//tela quando der game over
const GameOver = ({ retry, score }) => {
    return (
        <div>
            <h1>Fim do jogo!</h1>
            <h2>A sua pontuação foi: <span>{score}</span></h2>
            <button onClick={retry}>Resetar jogo</button> {/*leva para a página inicial do StartScreen*/}
        </div>
    )
}

export default GameOver