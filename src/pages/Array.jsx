import React from 'react'

const Array = () => {
  const carros = ['Fusca', 'Gol', 'Celta', 'Corola', 'Corsa']
  const pessoas = ['Orion', 'Creitin', 'Jorgin', 'Klebin']
  return (
    <div>
      <h1>Array</h1>
      <h2>Carros</h2>
      {carros.map(item => (
        <p>{item}</p>
      ))}
      <div>
        <h2>Pessoas</h2>
        {pessoas.map(item => (
          <ul><li>{item}</li></ul>
        ))}
      </div>
    </div>
  )
}

export default Array