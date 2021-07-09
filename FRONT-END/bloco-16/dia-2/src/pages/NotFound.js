import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        Página não existe
        <Link to="/">Voltar</Link>
      </div>
    )
  }
}
