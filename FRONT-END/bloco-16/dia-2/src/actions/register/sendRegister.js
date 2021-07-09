const sendRegister = ({ target }) => {
  const { name, value } = target;
  return {
    type: 'ADD_INPUT',
    input: 'inputsLogin',
    name,
    value,
  }
}

export default sendRegister;
