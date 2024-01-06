import './App.css';

import { useState, useEffect } from "react";

//4 - custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"; //url base da API

function App() {
  const [products, setProducts] = useState([]); //products é a lista de produtos que está no data > db.json, products salva e setProducts ajuda a colocar os produtos em algum lugar

  //4 - custom
  const { data: items, httpConfig } = useFetch(url) //importa o data do useFetch, faz com que tenhamos acesso aos dados

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  //1 - resgatando dados
  //useEffect(() => { //chamada assincrona c/ o useEffect
  //  async function fetchData() {
  //    const res = await fetch(url); //res: resposta da requisição

  //    const data = await res.json(); //resposta vem em json(texto puro), precisamos transformar em obj

  //    setProducts(data);
  //  }
  //  fetchData();
  //}, []);

  //2 - add de produtos
  const handleSumit = async (e) => { //função que envia o formulário
    e.preventDefault() //não submete o formulário do jeito tradicional

    const product = { //cria o objeto para envio de todos os dados p/ o backend 
      name,
      price
    }

    //  const res = await fetch(url, { //requisição
    //    //esse segundo obj configura como vai ser a requisição
    //    method: "POST",
    //    headers: { //cabeçalios da requisição, podemos transmitir na requisição que tipo de conteúdo estamos manipulando
    //      "Content-Type": "application/json"
    //    },
    //    body: JSON.stringify(product), //corpo da requisição 
    //  })

    //3 - carregamento dinâmico
    //  const addedProduct = await res.json()

    //  setProducts((prevProducts) => [...prevProducts, addedProduct]) //add os produtos automaticamente, sem precisar dar F5

    //5 - refatorando post
    httpConfig(product, "POST") //manda o produto(dado) e o POST

    setName("") //reseta os states, ou seja, limpa as caixas de inclusão de produtos
    setPrice("") //reseta os states, ou seja, limpa as caixas de inclusão de produtos

  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul> {/*loop de produtos, onde vamos exibir cada um deles*/}
        {items && items.map((product) => ( //quando os itens forem preenchidos, retorna a lista (isso com o custom hooks)
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
      {/*onSumit nosso evento que dispara a função handleSumit*/}
      <div className="add-product">
        <form onSubmit={handleSumit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} /> {/*onChange faz a manipulação do dado pegando o evento de digitar e extraindo o valor do input após esse evento*/}
          </label>
          <label>
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} /> {/*onChange faz a manipulação do dado pegando o evento de digitar e extraindo o valor do input após esse evento*/}
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
