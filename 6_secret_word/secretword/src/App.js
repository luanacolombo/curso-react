//CSS
import './App.css';
//React
import { useCallback, useEffect, useState } from "react";
//data
import { wordsList } from "./data/words";
//components 
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  console.log(words)

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen />} {/*quando o estágio do game for start, irá mostrar o StartScreen*/}
      {gameStage === 'game' && <Game />} {/*quando o estágio do game for game, irá mostrar o Game*/}
      {gameStage === 'end' && <GameOver />} {/*quando o estágio do game for end, irá mostrar o GameOver*/}
    </div>
  );
}

export default App;
