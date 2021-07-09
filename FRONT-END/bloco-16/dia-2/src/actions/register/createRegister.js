const createRegister = ({ target }) => {
  const { name, value } = target;
  return {
    type: 'ADD_INPUT',
    input: 'inputsRegister',
    name,
    value,
  }
}

export default createRegister;
