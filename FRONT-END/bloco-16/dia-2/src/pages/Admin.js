import React from 'react'
import { connect } from 'react-redux'

export const Admin = ({registers, logedId}) => {
  const logedUser = registers.find(({ id }) => id === logedId );
  return (
    <div>
      <p>
        Logado Como: {logedUser.role}
      </p>
      <p>
        Email: {logedUser.email}
      </p>
      <p>
        Idade: {logedUser.idade}
      </p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  logedId: state.RegisterReducer.logedId,
  registers: state.RegisterReducer.registers,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
