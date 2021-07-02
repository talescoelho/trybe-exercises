const sendProfessionalForm = ({ target }) => {
  const { name, value } = target;
  return {
    type: 'ADD_INPUT',
    info: 'professionalInfo',
    name,
    value,
  }
}

export default sendProfessionalForm;
