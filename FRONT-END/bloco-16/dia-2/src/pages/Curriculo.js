import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from '../components/Form';
import ResumeForm from '../components/ResumeForm';

export class Curriculo extends Component {
  render() {
    const { sendForm } = this.props;
    return (
      <div>
        <Form />
        {!sendForm && <ResumeForm />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  sendForm: state.FormReducer.sendForm,
})

export default connect(mapStateToProps)(Curriculo)
