import React, { Component } from 'react'
import Store from '../store/Store';

export default class count extends Component {
  constructor() {
    super();

    this.state = {
      number: 0,
      count: 0,
      clicks: 0,
      allValues: [],
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
    this.setState({
      count: Store.getState().value,
      clicks: Store.getState().clicks,
      allValues: Store.getState().allValues
    });
  }

  subtrair() {
    const { number } = this.state;
    Store.dispatch({
      type: 'DECREMENT',
      number: Number(number),
    })
    this.setState({
      count: Store.getState().value,
      clicks: Store.getState().clicks,
      allValues: Store.getState().allValues
    });
  }

  handleClick({ target: {value} }) {
    this.setState({number: value});
  }

  render() {
    const { number, count, clicks, allValues } = this.state;
    return (
      <div>
        Contador: { count } Clicks: { clicks } <br/><br/>
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
