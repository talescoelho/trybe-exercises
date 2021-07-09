const sendPersonalForm = ({ target }) => {
  const { name } = target;
  let value;
  if (target.name === 'name') {
    value = target.value.toUpperCase();
  } else if (target.name === 'address') {
    value = target.value.normalize("NFD").replace(/[^a-zA-Z0-9 s]/g, "");
  } else {
    value = target.type === 'checkbox'
      ? target.checked
      : target.value;
  }
  return {
    type: 'ADD_INPUT',
    info: 'personalInfo',
    name,
    value,
  }
}

export default sendPersonalForm;
