import React from 'react'

function Buttons(key) {
  // console.log(key);
  return (
    <button key={key.value} onClick={key.click} className={`button-${key.value}`} >
      {key.value}
    </button>
  )
}

export default Buttons
