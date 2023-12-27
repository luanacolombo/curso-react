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

const guessesQty = 3

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("") //palavra escolhida de forma aleatória
  const [pickedCategory, setPickedCategory] = useState("") //categoria escolhida de forma aleatória
  const [letters, setLetters] = useState([]) //letras escolhidas pelo usuário

  const [guessedLetters, setGuessedLetters] = useState([]) //letras adivinhadas
  const [wrongLetters, setWrongLetters] = useState([]) //letras erradas
  const [guesses, setGuesses] = useState(guessesQty) //tentativas do usuário
  const [score, setScore] = useState(0) //pontuação do usuário

  const pickWordAndCategory = useCallback(() => {
    //pick a random category
    const categories = Object.keys(words) //todas as categorias
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)] //pega uma aleatória, de 0 ao número de categorias que tem, Math.floor arredonda pra baixo o indice

    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)] //da acesso a todas as palavras da categorias e pega uma categoria aleatória

    return { word, category }
  }, [words])

  //start the secret word game
  const startGame = useCallback(() => {
    //clear all letters
    clearLetterStates()

    //pick word and pick category
    const { word, category } = pickWordAndCategory()

    //create an array os letters
    let wordLetters = word.split("") //pega as letras das palavras

    wordLetters = wordLetters.map((l) => l.toLowerCase()) //pega cada uma das letras, onde todas estarão minúsculas

    //fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name) //muda o estado do jogo
  }, [pickWordAndCategory])

  //process the letter input, processa as letras digitadas
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase() //normaliza as letras, deixando sempre minúsculas

    //check if letter has already been utilized
    if ( //se as letras adivinhadas incluem normalizedLetter, ou se as letras erradas já incluem a normalizedLetter, retorna
      guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)
    ) {
      return
    }

    //push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1) //diminui uma tentativa, vai diminuindo conforme o usuário botar letras erradas
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  //check if guesses ended
  useEffect(() => { //monitora algum dado, terá um função que será executada cada vez que o dado for alterado
    if (guesses <= 0) {
      //reset all states
      clearLetterStates() //limpa o state das letras

      setGameStage(stages[2].name)
    }
  }, [guesses]) //dado a ser monitorado

  //check win condition
  useEffect(() => { //monitora algum dado, terá um função que será executada cada vez que o dado for alterado
    const uniqueLetters = [... new Set(letters)] //array de letras únicas

    //win condition
    if (guessedLetters.length === uniqueLetters.length) {
      //add score
      setScore((actualScore) => actualScore += 100)

      //restart game with new word
      startGame()
    }
  }, [guessedLetters, letters, startGame])

  //restarts the game, reinicia o jogo
  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)

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
      {gameStage === 'end' && <GameOver retry={retry} score={score} />} {/*quando o estágio do game for end, irá mostrar o GameOver*/}
    </div>
  );
}

export default App;
