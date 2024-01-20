import './App.css';

//1 - config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <h1>React Router</h1> {/*elementos fora do Routes, por exemplo, estarão sendo repetidos em todas as páginas*/}
      <BrowserRouter>
        <Routes>
          {/*path="/" home da aplicação, element={<Home />} componente impresso quando o usuário acessar essa rota*/}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
