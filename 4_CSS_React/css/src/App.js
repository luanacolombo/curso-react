import './App.css';
import MyComponent from './components/MyComponent';

function App() {
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
    </div>
  );
}

export default App;
