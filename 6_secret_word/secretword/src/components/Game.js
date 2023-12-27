import "./Game.css";
//tela do jogo
const Game = ({ verifyLetter }) => {
    return (
        <div>
            <h1>Game</h1>
            <button onClick={verifyLetter}>Finalizar jogo</button> {/*leva para a página do GameOver*/}
        </div>
    )
}

export default Game