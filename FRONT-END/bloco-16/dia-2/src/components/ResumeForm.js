import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ResumeForm extends Component {
  render() {
    const { form } = this.props;
    const { personalInfo: { name, email, address, city, state, addressType },
    professionalInfo: { resume, role, roleDescription } } = form;
    return (
      <div>
        <fieldset>
          <legend>Resumo das Informações Pessoais</legend>
          <p>
            <span>Nome: {name}</span>
          </p>
          <p>
            <span>Email: {email}</span>
          </p>
          <p>
            <span>Endereço: {address} / </span>
            <span>Cidade: {city}-</span>
            <span>{state}</span>
          </p>
          <p>
            <span>Residência: {addressType}</span>
          </p>
        </fieldset>
        <fieldset>
          <legend>Resumo das Informações Profissionais</legend>
          <p>
            <span>Resumo: {resume}</span>
          </p>
          <p>
            <span>Cargo: {role}</span>
          </p>
          <p>
            <span>Descrição do Cargo: {roleDescription}</span>
          </p>
        </fieldset>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  form: state.FormReducer
})

export default connect(mapStateToProps)(ResumeForm)
