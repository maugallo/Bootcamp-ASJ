import './App.css';
import {useState} from "react";
import * as Icon from 'react-bootstrap-icons';

function App() {
  const dado1 = < Icon.Dice1 size={150}/>
  const dado2 = < Icon.Dice2 size={150}/>
  const dado3 = < Icon.Dice3 size={150}/>
  const dado4 = < Icon.Dice4 size={150}/>
  const dado5 = < Icon.Dice5 size={150}/>
  const dado6 = < Icon.Dice6 size={150}/>

  const [valor, setValor] = useState(null);
  const [valor2, setValor2] = useState(null);
  const [texto, setTexto] = useState(null);

  const tirarDados = () => {
    let aleatorio = Math.floor(Math.random() * 6) + 1;
    let aleatorio2 = Math.floor(Math.random() * 6) + 1;
    setTexto(aleatorio + aleatorio2);
    
    switch (aleatorio) {
      case 1:
        setValor(dado1);
        break;
      case 2:
        setValor(dado2);
        break;
      case 3:
        setValor(dado3);
        break;
      case 4:
        setValor(dado4);
        break;
      case 5:
        setValor(dado5);
        break;
      case 6:
        setValor(dado6);
        break;
      default:
        break;
    }

    switch (aleatorio2) {
      case 1:
        setValor2(dado1);
        break;
      case 2:
        setValor2(dado2);
        break;
      case 3:
        setValor2(dado3);
        break;
      case 4:
        setValor2(dado4);
        break;
      case 5:
        setValor2(dado5);
        break;
      case 6:
        setValor2(dado6);
        break;
      default:
        break;
    }
  }

  return (
    <div className="container text-center">
      <h1>¡Tira tus dados!</h1>
      <button className="btn btn-lg btn-dark my-3" onClick={tirarDados} >Tirar dados</button>
      <h2>{valor} {valor2}</h2>
      <p className='fs-3'>{texto !== null ? `El resultado es ${texto}` : ""}</p>
    </div>
  );
}

export default App;
