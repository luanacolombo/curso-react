import './App.css';

import { useState, useEffect } from "react" //useState salva os dados, useEffect faz a requisição 1x ou quando precisarmos

//4- curtom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]) //products salva, setProducts auxilia a colocar os produtos em algum lugar

  //4- custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url) //importa o que queremos usar do hook, renomeia os dados como items

  const [name, setName] = useState("") //começa com uma string vazia
  const [price, setPrice] = useState("") //começa com uma string vazia


  //2- add de produtos
  const handleSubmit = async (e) => { //função que vai enviar o formulário
    e.preventDefault() //não submete o formulário do jeito tradicional

    const product = { //cria o objeto p/ enviar todos os dados p/ back-end
      name, //quando o valor tem o mesmo nome da chave podemos resumir assim, pois se igualam aos dois states já criados
      price, //quando o valor tem o mesmo nome da chave podemos resumir assim, pois se igualam aos dois states já criados
    }


    //5- refatorando post
    httpConfig(product, "POST")

    setName("") //reseta os states
    setPrice("") //reseta os states
  }

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - state de loading */}
      {loading && <p>Carregando dados...</p>} {/*se o loading estiver true, mostra a mensagem*/}
      {error && <p>{error}</p>}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
              {/* 9 - desafio */}
              <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li>
          ))}
      </ul>

      <div className="add-product">
        <p>Adicionar produto:</p>
        <form onSubmit={handleSubmit}> {/*onSubmit é o evento, dispara a função handleSubmit*/}
          <label> {/*inputs que vão manipular os estados, IMPORTANTE: ligar o input ao state*/}
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} /> {/*onChange faz a manipulação do dado pegando o evento de digitar e extraindo o valor do input após esse evento*/}
          </label>
          <label> {/*inputs que vão manipular os estados, IMPORTANTE: ligar o input ao state*/}
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} /> {/*onChange faz a manipulação do dado pegando o evento de digitar e extraindo o valor do input após esse evento*/}
          </label>
          {loading ? <p>Aguarde!</p> : <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
