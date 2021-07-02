import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import verifyLogin from '../actions/register/verifyLogin';
import sendRegister from '../actions/register/sendRegister';

export class Login extends Component {
  render() {
    const { login, sendRegister, verifyLogin } = this.props;
    if (login) {
      return <Redirect to="/RedirectPage" />
    }
    return (
      <div>
        <label htmlFor="email">
          Email: 
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu Email"
            onChange={sendRegister}
            />
        </label>
        <label htmlFor="password">
          Senha: 
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite seu Password"
            onChange={sendRegister}
            />
        </label>
        <button
          type="button"
          onClick={verifyLogin}
        >
          Logar
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.RegisterReducer.login
})

const mapDispatchToProps = (dispatch) => ({
  verifyLogin: () => dispatch(verifyLogin()),
  sendRegister: (target) => dispatch(sendRegister(target))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
