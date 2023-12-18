import { useState } from 'react';
import './App.css';

import City from "./assets/city.jpg";
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  const name = "Joaquim"
  const [userName] = useState("Maria")

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 }
  ]

  function showMessage() {
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("") //message consome e o setMessage altera o valor, estado gerenciado pelo componente pai

  const handleMessage = (msg) => { //forma de gerenciar o estado
    setMessage(msg);
  } //handleMessage vai receber uma mensagem como argumento e vai alterar essa mensagem do state

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <div>
        <img src="img1.jpg" alt="Paisagem" />
      </div>
      {/*Imagem em asset*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/*props*/}
      <ShowUserName name={userName} /> {/*esse componente tem acesso a uma prop chamada name com o valor da const declarada*/}
      {/*destructuring*/}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/*reaproveitamento*/}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
      {/*loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar} />
      ))}
      {/*fragment*/}
      <Fragment propFragment="teste" />
      {/*children, fica nesse formato quando queremos ter HTML dentro*/}
      <Container myValue="testing"> {/*myValue="testing" é uma propriedade*/}
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2"> {/*myValue="testing 2" é uma propriedade*/}
        <h5>Testanto o container</h5>
      </Container>
      {/*executar função*/}
      <ExecuteFunction myFunction={showMessage} /> {/*passa a função por meio de uma prop*/}
      {/*state lift*/}
      <Message msg={message} /> {/*envia a mensagem pro prop, componente que consome o estado*/}
      <ChangeMessageState handleMessage={handleMessage} /> {/*componente altera e eleva o estado da mensagem p/ termos uma atualização e um reconsumo desse novo estado*/}
    </div>
  );
}

export default App;
