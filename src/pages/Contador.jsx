import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Contador = () => {

   // let numero = 0;
    let [numero, setNumero] = useState(0)

    function somar(){
        setNumero(++numero)
        console.log(++numero)
    }
    function diminuir(){
        setNumero(--numero)
        console.log(--numero)
    }
    function somarcinco(){
        setNumero(numero+5)
        console.log(+numero+5)
    }
    function somardez(){
        setNumero(numero+10)
        console.log(numero+10)
    }
    function diminuircinco(){
        setNumero(numero-5)
        console.log(numero-5)
    }
    function diminuirdez(){
        setNumero(numero-10)
        console.log(numero-10)
    }
  return (
    <div>
        <h1>Contador</h1>
        <Button variant="dark" onClick={diminuirdez}>-10</Button>
        <Button variant="warning" onClick={diminuircinco}>-5</Button>
        <Button variant="danger" onClick={diminuir}>-</Button>
        {numero}
        <Button variant="success" onClick={somar}>+</Button>
        <Button variant="info" onClick={somarcinco}>+5</Button>
        <Button variant="primary" onClick={somardez}>+10</Button>

    </div>
  )
}

export default Contador