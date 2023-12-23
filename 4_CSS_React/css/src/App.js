import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from "react";

function App() {
  const n = 15
  const [name] = useState("Matheus")

  return (
    <div className="App">
      {/*CSS global*/}
      <h1>React com CSS</h1>
      {/*CSS de componente*/}
      <MyComponent />
      <p>Este parágrafo é do App.js</p> {/*pegou o css do MyComponent */}
      {/*Inline CSS*/}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline</p>
      {/*CSS Inline dinâmico*/}
      <h2 style={n < 10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS dinâmico</h2> {/*primeiro () se for verdadeiro e segundo se for falso*/}
      <h2 style={n > 10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS dinâmico</h2> {/*primeiro () se for verdadeiro e segundo se for falso*/}
      <h2 style={name === "Matheus" ? ({ color: "green", backgroundColor: "#000" }) : null}>Teste nome</h2> {/*primeiro () se for verdadeiro e segundo se for falso*/}
    </div>
  );
}

export default App;
