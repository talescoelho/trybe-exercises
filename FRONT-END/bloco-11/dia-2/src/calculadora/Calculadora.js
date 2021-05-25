import React from 'react'
import Buttons from './Buttons'

function Calculadora() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  // const operations = ['+', '-', '*', '/']
  console.log(numbers);
  return (
    <div>
      <Buttons value={numbers[0]}/>
    </div>
  )
}

export default Calculadora
