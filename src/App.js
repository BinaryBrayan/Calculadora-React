import React from 'react';
import Boton from './components/Boton';
import './App.css';
import Pantalla from './components/Pantalla';
import BotonClear from './components/botonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input+val);
  };

  const borrarPantalla = () => {
    setInput('');
  }

  const resolverInput=()=>{
    if (input){
      setInput(evaluate(input));
    }else{
      alert('Ingrese primero los valores!!');
    }
    
  }

  return (
    <div className="App">
      <div className='main-contenedor-calculadora'>
          <Pantalla valor={input}/>
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={resolverInput}>=</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={borrarPantalla}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
