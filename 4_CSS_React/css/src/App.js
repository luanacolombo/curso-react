import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/*CSS global*/}
      <h1>Re act com CSS</h1>
      {/*CSS de componente*/}
      <MyComponent />
      <p>Este parágrafo é do App.js</p> {/*pegou o css do MyComponent*/}
    </div>
  );
}

export default App;
