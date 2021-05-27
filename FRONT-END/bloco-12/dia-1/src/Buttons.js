import React from 'react'

function Buttons() {
  // extrair 2 variaveis do React.useState
  const [state, setState] = React.useState(0);
  return (
    <div>
      <button onClick={() => setState(state + 1)}>Click +</button>
      <button onClick={() => setState(state - 1)}>Click -</button>
      <span>{state}</span>
    </div>
  )
}

export default Buttons
