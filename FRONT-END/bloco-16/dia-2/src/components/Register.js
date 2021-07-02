import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import createRegister from '../actions/register/createRegister';
import createNewClient from '../actions/register/createNewClient';

export class Register extends Component {
  render() {
    const { login, createRegister, createNewClient } = this.props;
    if (login) {
      return <Redirect to="/RedirectPage" />
    }
    return (
      <div>
        <label htmlFor="name">
          Nome: 
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu Nome"
            onChange={createRegister}
            />
        </label>
        <label htmlFor="email">
          Email: 
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu Email"
            onChange={createRegister}
            />
        </label>
        <label htmlFor="password">
          Senha: 
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite seu Password"
            onChange={createRegister}
            />
        </label>
        <label htmlFor="idade">
          Senha: 
          <input
            type="number"
            id="idade"
            name="idade"
            placeholder="Digite sua idade"
            onChange={createRegister}
            />
        </label>
        <label htmlFor="role">
          Loja: 
          <input
            type="radio"
            id="role"
            name="role"
            value="shop"
            onChange={createRegister}
            />
        </label>
        <label htmlFor="client">
          Cliente: 
            <input
            type="radio"
            id="client"
            name="role"
            value="client"
            onChange={createRegister}
            />
        </label>
        <button
          type="button"
          onClick={createNewClient}
        >
          Cadastrar
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.RegisterReducer.login
})

const mapDispatchToProps = (dispatch) => ({
  createRegister: (target) => dispatch(createRegister(target)),
  createNewClient: () => dispatch(createNewClient()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
