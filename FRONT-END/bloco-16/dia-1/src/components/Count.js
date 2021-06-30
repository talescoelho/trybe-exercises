import React, { Component } from 'react'
import { connect } from 'react-redux';
import Store from '../store/Store';

class count extends Component {
  constructor() {
    super();

    this.state = {
      number: 0,
    }
    this.somar = this.somar.bind(this);
    this.subtrair = this.subtrair.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  somar() {
    const { number } = this.state;
    Store.dispatch({
      type: 'INCREMENT',
      number: Number(number),
    })
  }

  subtrair() {
    const { number } = this.state;
    Store.dispatch({
      type: 'DECREMENT',
      number: Number(number),
    })
  }

  handleClick({ target: {value} }) {
    this.setState({number: value});
  }

  render() {
    const { number } = this.state;
    const { newValue: { value, clicks, allValues} } = this.props;
    return (
      <div>
        Contador: { value } Clicks: { clicks } <br/><br/>
        <input type="number" value={number} onChange={this.handleClick}/>
        <button onClick={this.somar}>Somar</button>
        <button onClick={this.subtrair}>Subtrair</button>
        <div>
          | {allValues.length !== 0 && allValues.map((number, i) => (<span key={i}>{number} | </span>))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  newValue: Store.getState()
});

export default connect(mapStateToProps)(count);
