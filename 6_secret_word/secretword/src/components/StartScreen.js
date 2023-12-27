import "./StartScreen.css";
//tela inicial do jogo
const StartScreen = ({ startGame }) => {
    return (
        <div className="start">
            <h1>Secret Words</h1>
            <p>Clique no botão abaixo para começar a jogar</p>
            <button onClick={startGame}>Começar o jogo</button> {/*leva para a página do game*/}
        </div>
    )
}

export default StartScreen