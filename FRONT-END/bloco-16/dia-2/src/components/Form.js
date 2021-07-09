import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import ProfessionalInfo from './ProfessionalInfo';
import Buttons from './Buttons';

class Form extends Component {
  render() {
    return (
      <div>
        <form id="myForm">
          <PersonalInfo />
          <ProfessionalInfo />
          <Buttons />
        </form>
      </div>
    )
  }
}

export default Form;
