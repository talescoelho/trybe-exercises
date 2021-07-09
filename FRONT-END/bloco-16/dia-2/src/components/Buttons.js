import React, { Component } from 'react';
import { connect } from 'react-redux';
import clearForm from '../actions/form/clearForm';
import ActiveDesactiveButton from '../actions/form/activeDesactiveButton';
import sendForm from '../actions/form/sendForm';

export class Buttons extends Component {
  constructor() {
    super();

    this.validForm = this.validForm.bind(this);
  }

  validForm() {
    const { FormReducer, ActiveDesactiveButton } = this.props;
    const personalInfo = Object.values(FormReducer.personalInfo)
      .filter((element) => element === '').length
    const professionalInfo = Object.values(FormReducer.professionalInfo)
      .filter((element) => element === '').length
    if (!personalInfo && !professionalInfo && FormReducer.verifyForm) {
      ActiveDesactiveButton(false);
    } else if (personalInfo || professionalInfo) {
      if (!FormReducer.verifyForm) {
        ActiveDesactiveButton(true);
      }
    }
  }

  componentDidUpdate() {
    this.validForm();
  }

  render() {
    this.validForm();
    const { clearForm, verifyForm, sendForm } = this.props;
    return (
      <>
        <button
          type="button"
          onClick={sendForm}
          disabled={verifyForm}
        >
          Submit
        </button>
        <button
          type="reset"
          onClick={clearForm}
        >
          Clear
        </button>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  verifyForm: state.FormReducer.verifyForm,
  FormReducer: state.FormReducer,
})

const mapDispatchToProps = (dispatch) => ({
  clearForm: () => dispatch(clearForm()),
  ActiveDesactiveButton: (flag) => dispatch(ActiveDesactiveButton(flag)),
  sendForm: () => dispatch(sendForm()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
