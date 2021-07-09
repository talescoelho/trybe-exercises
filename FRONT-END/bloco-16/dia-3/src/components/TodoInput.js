import React, { useState } from 'react';
import { connect } from 'react-redux';
import addTodo from '../actions/addTodo';

function TodoInput({addTodo}) {
  const [state, setState] = useState({todo: ''});
  function handleChange({target}) {
    const { name, value } = target;
    setState({[name]: value})
  }
// eu topo!!
  function handleClick() {
    addTodo(state.todo);
    setState({todo: ''});
  }

  return (
    <>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          value={state.todo}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={ handleClick }>Adicionar Tarefa</button>
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (state) => dispatch(addTodo(state)),
})

export default connect(null, mapDispatchToProps)(TodoInput)
