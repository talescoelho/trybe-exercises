import React from 'react';
import PropTypes from 'prop-types';

class PokeStats extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className="order">
        <div> {name}: {type} </div>
        <div> {image} </div>
        <div> {averageWeight.value}{averageWeight.measurementUnit} </div>
      </div>
    );
  }
}

PokeStats.PropTypes = {
  name = PropTypes.string.isRequired,
  type = PropTypes.string.isRequired,
  averageWeight = PropTypes.object.isRequired,
  image = PropTypes.string.isRequired
}

export default PokeStats;