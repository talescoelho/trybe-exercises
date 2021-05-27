import React from 'react';

const sumOne = (s, i, n) => {
  return i === n ? s + 1 : s;
}

export default function App() {
  const [state, setState] = React.useState([0, 0, 0]);
  console.log(state.a);
  return (
    <div>
      <button onClick={() => setState(state.map((s, i) => sumOne(s, i, 0)))}> Click {state[0]} </button>
      <button onClick={() => setState(state.map((s, i) => sumOne(s, i, 1)))}> Click {state[1]} </button>
      <button onClick={() => setState(state.map((s, i) => sumOne(s, i, 2)))}> Click {state[2]} </button>
    </div>
  )
}
