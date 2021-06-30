import React, { Component } from 'react'
import { connect } from 'react-redux'
import Store from '../store/Store';

class Teste extends Component {
  render() {
    const { newValue } = this.props;
    return (
      <div>
        Valor no Teste: { newValue.value }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  newValue: Store.getState()
})

export default connect(mapStateToProps)(Teste)
