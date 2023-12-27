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

  const [pickedWord, setPickedWord] = useState("") //palavra escolhida de forma aleatória
  const [pickedCategory, setPickedCategory] = useState("") //categoria escolhida de forma aleatória
  const [letters, setLetters] = useState([]) //letras escolhidas pelo usuário

  const [guessedLetters, setGuessedLetters] = useState([]) //letras adivinhadas
  const [wrongLetters, setWrongLetters] = useState([]) //letras erradas
  const [guesses, setGuesses] = useState(3) //tentativas do usuário
  const [score, setScore] = useState(0) //pontuação do usuário

  const pickWordAndCategory = () => {
    //pick a random category
    const categories = Object.keys(words) //todas as categorias
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)] //pega uma aleatória, de 0 ao número de categorias que tem, Math.floor arredonda pra baixo o indice

    console.log(category)

    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)] //da acesso a todas as palavras da categorias e pega uma categoria aleatória

    console.log(word)

    return { word, category }
  }

  //start the secret word game
  const startGame = () => {
    //pick word and pick category
    const { word, category } = pickWordAndCategory()

    //create an array os letters
    let wordLetters = word.split("") //pega as letras das palavras

    wordLetters = wordLetters.map((l) => l.toLowerCase()) //pega cada uma das letras, onde todas estarão minúsculas

    console.log(word, category)
    console.log(wordLetters)

    //fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name) //muda o estado do jogo
  }

  //process the letter input, processa as letras digitadas
  const verifyLetter = (letter) => {
    console.log(letter)
  }

  //restarts the game, reinicia o jogo
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />} {/*quando o estágio do game for start, irá mostrar o StartScreen*/}
      {gameStage === 'game' && <Game
        verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />} {/*quando o estágio do game for game, irá mostrar o Game*/}
      {gameStage === 'end' && <GameOver retry={retry} />} {/*quando o estágio do game for end, irá mostrar o GameOver*/}
    </div>
  );
}

export default App;
