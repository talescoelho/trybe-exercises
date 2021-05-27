import React from 'react'

function SearchType(props) {
  const types = props.data.type || props.data;
  return (
    <div>
      <button onClick={props.click}>{types}</button>
    </div>
  )
}

export default SearchType
