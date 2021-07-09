const changeFilter = (text) => {
  return {
    type: 'CHANGE_FILTER',
    text,
  }
}

export default changeFilter;
