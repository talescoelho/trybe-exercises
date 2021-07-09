import React, { Component } from 'react';
import { connect } from 'react-redux';
import sendPersonalForm from '../actions/form/sendPersonalForm';

const states = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

class PersonalInfo extends Component {
  render() {
    const { sendPersonalForm } = this.props;
    return (
      <fieldset>
        <legend>Informações Pessoais</legend>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            name="name"
            maxLength="40"
            onChange={sendPersonalForm}
            style={{textTransform: "uppercase"}}
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            maxLength="40"
            onChange={sendPersonalForm}
            required
          />
        </label>
        <label htmlFor="address">
          Endereço:
          <input
            type="text"
            name="address"
            maxLength="200"
            onChange={sendPersonalForm}
            required
          />
        </label>
        <label htmlFor="city">
          Cidade:
          <input
            type="text"
            name="city"
            maxLength="30"
            // onBlur={}
            onChange={sendPersonalForm}
            required
          />
        </label>
        <label htmlFor="state">
          Estado:
          <select
            name="state"
            onChange={sendPersonalForm}
            defaultValue=""
          >
            <option value="">Selecione</option>
                {
                  states.map((value, key) => (
                    <option key={ key }>{ value }</option>
                  ))
                }
          </select>
        </label>
        <label htmlFor="house">
          <input
            type="radio"
            id="house"
            name="addressType"
            value="Casa"
            onChange={sendPersonalForm}
          />
          Casa
        </label>
        <label htmlFor="apart">
          <input
            type="radio"
            id="apart"
            name="addressType"
            value="Apartamento"
            onChange={sendPersonalForm}
          />
          Apartamento
        </label>
      </fieldset>
    )
  }
}

const mapStateToProps = (state) => ({
  store: state.FormReducer,
})

const mapDispatchToProps = (dispatch) => ({
  sendPersonalForm: (state) => dispatch(sendPersonalForm(state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo)
