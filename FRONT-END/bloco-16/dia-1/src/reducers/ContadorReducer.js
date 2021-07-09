function ContadorReducer(state = {value: 0, clicks: 0, allValues: []}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return ({
        value: state.value + action.number,
        clicks: state.clicks + 1,
        allValues: [...state.allValues, action.number]
      })
    case 'DECREMENT':
      return ({
        value: state.value - action.number,
        clicks: state.clicks + 1,
        allValues: [...state.allValues, -action.number]
      })
    default:
      return state
  }
}

export default ContadorReducer
