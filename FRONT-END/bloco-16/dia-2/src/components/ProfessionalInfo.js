import React, { Component } from 'react'
import { connect } from 'react-redux'
import sendProfessionalForm from '../actions/form/sendProfessionalForm';

class ProfessionalInfo extends Component {
  render() {
    const { sendProfessionalForm } = this.props;
    let selected = false;
    return (
      <>
        <fieldset>
        <legend>Informações Profissionais</legend>
          <label htmlFor="resume">
            Resumo: 
            <textarea
              name="resume"
              maxLength="1000"
              onChange={sendProfessionalForm}
              required
            />
          </label>
          <label htmlFor="role">
            Cargo: 
            <input
              name="role"
              maxLength="40"
              onChange={sendProfessionalForm}
              onSelect={() => {
                !selected && alert('Preencha com cuidado essa informação.')
                selected = true;
              }}
              required
            />
          </label>
          <label htmlFor="roleDescription">
            Descrição do Cargo:
            <textarea
              name="roleDescription"
              maxLength="500"
              onChange={sendProfessionalForm}
            />
          </label>
        </fieldset>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendProfessionalForm: (state) => dispatch(sendProfessionalForm(state)),
})

export default connect(null, mapDispatchToProps)(ProfessionalInfo)
