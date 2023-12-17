import { useState } from 'react';
import './App.css';

import City from "./assets/city.jpg";
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';

function App() {
  const name = "Joaquim"
  const [userName] = useState("Maria")

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 }
  ]

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
        <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
      {/*fragment*/}
      <Fragment propFragment="teste" />
    </div>
  );
}

export default App;
