const INITIAL_TODO = {
  todos: [],
  completed: [],
  filteredTodos: [],
}

const todoReducer = (state = INITIAL_TODO, action) => {
  if (action.type === 'ADD_TODO') {
    return {
      ...state,
      todos: [...state.todos, action.todo],
      filteredTodos: [...state.todos, action.todo],
    }
  } else if (action.type === 'ADD_COMPLETE') {
    return {
      ...state,
      completed: [...state.completed, state.todos[action.index]],
      todos: state.todos.filter((_, index) => index !== action.index),
    }
  } else if (action.type === 'CHANGE_FILTER') {
    if (action.text === 'Todas') {
      return {
        ...state,
        filteredTodos: [...state.todos, ...state.completed]
      }
    } else if (action.text === 'Inacabadas') {
      return {
        ...state,
        filteredTodos: [...state.todos]
      }
    } else if (action.text === 'Completas') {
      return {
        ...state,
        filteredTodos: [...state.completed]
      }
    }
  }
  return state;
}

export default todoReducer
