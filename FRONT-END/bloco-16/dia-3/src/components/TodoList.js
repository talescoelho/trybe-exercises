import React from 'react';
import { connect } from 'react-redux';
import addComplete from '../actions/addComplete';
import chageFilter from '../actions/chageFilter';

const TodoList = ({ todos, filteredTodos, addComplete, chageFilter }) => {
  function handleClick(index) {
    addComplete(index);
  }

  function handleChange({target}) {
    const { value } = target;
    chageFilter(value);
  }

  return (
    <>
    <select onChange={handleChange}>
      <option>Todas</option>
      <option>Inacabadas</option>
      <option>Completas</option>
    </select>
      {filteredTodos.map((todo, index) => (
        <p
          key={index}
          onDoubleClick={ () => handleClick(index) }
        >
          {todo}
        </p>
      ))}
    </>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todoReducer.todos,
  filteredTodos: state.todoReducer.filteredTodos,
  complete: state.todoReducer.complete,
})

const mapDispatchToProps = (dispatch) => ({
  addComplete: (state) => dispatch(addComplete(state)),
  chageFilter: (state) => dispatch(chageFilter(state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
