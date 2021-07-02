import React from 'react'
import { connect } from 'react-redux'
import logout from '../actions/register/logout';

export const Logout = ({logout}) => {
  return (
    <button type="button" onClick={ logout }>Deslogar</button>
  )
}

const mapDispatchToProps = (dispatch) => ({
  logout: (product) => dispatch(logout()),
})

export default connect(null, mapDispatchToProps)(Logout)
