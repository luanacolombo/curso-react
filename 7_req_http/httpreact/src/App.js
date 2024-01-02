import './App.css';

import { useState, useEffect } from "react";

const url = "http://localhost:3000/products"; //url base da API

function App() {
  const [products, setProducts] = useState([]); //products é a lista de produtos que está no data > db.json

  //1 - resgatando dados
  useEffect(() => { //chamada assincrona c/ o useEffect
    async function fetchData() {
      const res = await fetch(url); //res: resposta da requisição

      const data = await res.json(); //resposta vem em json(texto puro), precisamos transformar em obj

      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul> {/*loop de produtos, onde vamos exibir cada um deles*/}
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
