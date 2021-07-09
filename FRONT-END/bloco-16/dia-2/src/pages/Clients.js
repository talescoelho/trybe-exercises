import React from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Products from '../components/Products';
import Logout from '../components/Logout';

const Clients = ({registers, logedId}) => {
  const logedUser = registers.find(({ id }) => id === logedId );
  if (!logedUser) {
    return <Redirect to="/" />
  }
  return (
    <div>
      <p>
        Logado Como: {logedUser.name}
        <Logout />
      </p>
      <p>
        Email: {logedUser.email}
      </p>
      <p>
        Idade: {logedUser.idade}
      </p>
      <Products />
    </div>
  )
}

const mapStateToProps = (state) => ({
  logedId: state.RegisterReducer.logedId,
  registers: state.RegisterReducer.registers,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Clients)
