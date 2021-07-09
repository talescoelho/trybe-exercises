const clearForm = () => {
  const INITIAL_FORM = {
    personalInfo: {
      name: '',
      email: '',
      address: '',
      city: '',
      state: '',
      addressType: '',
    },
    professionalInfo: {
      resume: '',
      role: '',
      roleDescription: '',
    },
    sendForm: true,
    verifyForm: true,
  }
  return {
    type: 'CLEAR_ALL_INPUT',
    INITIAL_FORM,
  }
}

export default clearForm;
