import React from 'react';
import { connect } from 'react-redux';

const InfoMarker = ({ thisTruck }) => (
  <div>
    <h3>{thisTruck.name}</h3>
    <p>{thisTruck.foodItems}</p>
    <p>Distance: {thisTruck.distance} miles</p>
    <p>{thisTruck.hours ? thisTruck.hours : ''}</p>
  </div>
)


const mapStateToProps = (state) => {
  return {
    thisTruck: state.map.thisTruck
    };
};

export default connect( mapStateToProps )(InfoMarker);
