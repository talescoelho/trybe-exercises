const INITIAL_REGISTER = {
  inputsLogin: {
    email: '',
    password: '',
  },
  inputsRegister: {
    email: '',
    password: '',
    idade: '',
  },
  registers: [
    {
      id: 0,
      name: 'admin',
      email: 'email@email.com',
      password: '123',
      idade: '10',
      role: 'ADMIN',
    },
    {
      id: 1,
      name: 'loja',
      email: 'loja@loja.com',
      password: '123',
      idade: '10',
      role: 'shop',
    },
    {
      id: 2,
      name: 'user',
      email: 'user@user.com',
      password: '123',
      idade: '10',
      role: 'client',
    },
],
  login: true,
  logedId: 1,
}

const RegisterReducer = (state = INITIAL_REGISTER, action) => {
  if (action.type === 'ADD_INPUT') {
    return {...state, [action.input]: { ...state[action.input], [action.name]: action.value }}
  } else if (action.type === 'VERIFY_LOGIN') {
    const userLogin = state.registers.find(({ email, name }) => 
      email === state.inputsLogin.email
      || name === state.inputsLogin.email);
      console.log(userLogin)
    if (userLogin && userLogin.password === state.inputsLogin.password) {
      return {
        ...state,
        login: true,
        logedId: userLogin.id }
    } else {
      alert('Email ou senha inválido')
    }
  } else if (action.type === 'NEW_CLIENT') {
    const id = state.registers.length;
    return { ...state,
      registers: [...state.registers, { id, ...state.inputsRegister }],
      login: true,
      logedId: id }
  } else if (action.type === 'LOGOUT') {
    return {
      ...state,
      login: false,
      logedId: -1,
    }
  }
  return state;
}

export default RegisterReducer
