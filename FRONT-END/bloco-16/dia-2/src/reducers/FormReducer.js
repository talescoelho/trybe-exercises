const INITIAL_FORM = {
  personalInfo: {
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    addressType: '',
  },
  professionalInfo: {
    resume: '',
    role: '',
    roleDescription: '',
  },
  sendForm: true,
  verifyForm: true,
}

const FormReducer = (state = INITIAL_FORM, action) => {
  if (action.type === 'ADD_INPUT') {
    return {...state, [action.info]: { ...state[action.info], [action.name]: action.value }}
  } else if (action.type === 'CLEAR_ALL_INPUT') {
    return action.INITIAL_FORM
  } else if (action.type === 'ACTIVE_DESACTIVE_BUTTON') {
    return {...state, verifyForm: action.flag }
  } else if (action.type === 'SEND_FORM') {
    return {...state, sendForm: action.flag }
  }
  return state;
}

export default FormReducer
