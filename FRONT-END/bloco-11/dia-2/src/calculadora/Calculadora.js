import React from 'react'
import Buttons from './Buttons'
import './calculator.css'

function Calculadora() {
  const [state, setState] = React.useState('');
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const operations = ['+', '-', 'x', '/', '^', '%']
  return (
    <div className='calc' >
      <div className='calc-display' >{state === '' ? 0 : state}</div>

      <div className='calc-buttons' >
        <div className='calc-operators' key='calc-operators'>
          {operations.map((op) => <Buttons value={op} click={() => isNaN(Number(state.substr(-1)))
            ? setState(state.split(' ').map((v, i, a) => v === a[a.length - 1] ? op : v).join(' '))
            : setState(`${state} ${op}`)} />)}
          <Buttons value={'AC'} click={() => setState('')} />
        </div>
        <div className='calc-numbers' key='calc-numbers'>
          {numbers.map((number) => <Buttons value={number} click={() => setState(state === 'Syntax Error' 
            ? number 
            : state + number)} />)}
         </div>
      </div>

      <div className='calc-btn-result' >
        <Buttons value={'Calcular'} click={() => setState(state.split(' ').reduce((acc, el) => {
          if (acc === 'Syntax Error') {
            return acc;
          }
          if (el.substring(0, 1) === '/') {
            if (Number(el.substring(1)) === 0) {
              return 'Syntax Error';
            }
            acc = Number(acc) / Number(el.substring(1))
          } else if (el.substring(0, 1) === '+') {
            acc = Number(acc) + Number(el.substring(1))
          } else if (el.substring(0, 1) === '-') {
            acc = Number(acc) - Number(el.substring(1))
          } else if (el.substring(0, 1) === 'x') {
            acc = Number(acc) * Number(el.substring(1))
          } else if (el.substring(0, 1) === '^') {
            acc = Number(acc) ** Number(el.substring(1))
          } else if (el.substring(0, 1) === '%') {
            acc = Number(acc) * Number(el.substring(1)) / 100
          }
          return `${acc}`;
        }))} />
      </div>
    </div>
  )
}

export default Calculadora
