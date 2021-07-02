import React from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const RedirectPage = ({ registers, logedId, login }) => {
  const logedUser = registers.find(({ id }) => id === logedId)
  if (!login) {
    return <Redirect to="/" />
  } else {
    if (logedUser.role === 'ADMIN') {
      return <Redirect to="/Admin" />
    } else if (logedUser.role === 'shop') {
      return <Redirect to="/Shop" />
    } else {
      return <Redirect to="/Clients" />
    }
  }
}

const mapStateToProps = (state) => ({
  login: state.RegisterReducer.login,
  logedId: state.RegisterReducer.logedId,
  registers: state.RegisterReducer.registers,
})

export default connect(mapStateToProps)(RedirectPage)
