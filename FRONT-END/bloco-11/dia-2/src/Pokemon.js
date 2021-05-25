import React from 'react';
import PropTypes from 'prop-types';
import "./pokemon.css";

class PokeStats extends React.Component {
  render() {
    const { name, type, averageWeight, image, id } = this.props.data;

    return (
      <div key={id} className='poke-card'>
        <div className='poke-states'>
          <div> {name} </div> 
          <div> {type} </div>
          <div> {averageWeight.value}{averageWeight.measurementUnit} </div>
        </div>
        <div className='poke-image'>
          <img src={image} alt={name}></img>
        </div>
      </div>
    );
  }
}

PokeStats.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired
}

export default PokeStats;