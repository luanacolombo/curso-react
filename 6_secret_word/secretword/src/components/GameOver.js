import "./GameOver.css";
//tela quando der game over
const GameOver = ({ retry }) => {
    return (
        <div>
            <h1>Game Over</h1>
            <button onClick={retry}>Resetar jogo</button> {/*leva para a página inicial do StartScreen*/}
        </div>
    )
}

export default GameOver